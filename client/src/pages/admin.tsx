import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Save, X, Eye, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { AdminLogin } from "@/components/admin-login";
import type { Blog, InsertBlog, UpdateBlog } from "@shared/schema";

const categories = ["Security Tips", "Technology", "Smart Home", "Network Security", "Intercom Systems"];

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<InsertBlog>({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: categories[0],
    image: "",
    slug: "",
    readTime: ""
  });

  const { toast } = useToast();

  // Check authentication status
  useEffect(() => {
    fetch('/api/admin/status')
      .then(res => res.json())
      .then(data => setIsAuthenticated(data.isAuthenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ['/api/blogs'],
    queryFn: () => fetch('/api/blogs').then(res => res.json()) as Promise<Blog[]>,
    enabled: isAuthenticated === true // Only fetch when authenticated
  });

  const createBlogMutation = useMutation({
    mutationFn: (blog: InsertBlog) => 
      fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      toast({ title: "Blog created successfully!" });
      resetForm();
    },
    onError: (error: any) => {
      toast({ title: "Failed to create blog", description: error.message, variant: "destructive" });
    }
  });

  const updateBlogMutation = useMutation({
    mutationFn: ({ id, blog }: { id: string; blog: UpdateBlog }) => 
      fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify(blog),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      toast({ title: "Blog updated successfully!" });
      resetForm();
    },
    onError: (error: any) => {
      toast({ title: "Failed to update blog", description: error.message, variant: "destructive" });
    }
  });

  const deleteBlogMutation = useMutation({
    mutationFn: (id: string) => 
      fetch(`/api/blogs/${id}`, { method: 'DELETE' }).then(res => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      toast({ title: "Blog deleted successfully!" });
    },
    onError: (error: any) => {
      toast({ title: "Failed to delete blog", description: error.message, variant: "destructive" });
    }
  });

  const logoutMutation = useMutation({
    mutationFn: () => 
      fetch('/api/admin/logout', { method: 'POST' }).then(res => res.json()),
    onSuccess: () => {
      setIsAuthenticated(false);
      toast({ title: "Logged out successfully!" });
    },
    onError: () => {
      toast({ title: "Logout failed", variant: "destructive" });
    }
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      category: categories[0],
      image: "",
      slug: "",
      readTime: ""
    });
    setEditingBlog(null);
    setIsCreating(false);
  };

  const startEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      author: blog.author,
      category: blog.category,
      image: blog.image,
      slug: blog.slug,
      readTime: blog.readTime
    });
    setIsCreating(false);
  };

  const startCreate = () => {
    resetForm();
    setIsCreating(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingBlog) {
      updateBlogMutation.mutate({ id: editingBlog.id, blog: formData });
    } else {
      createBlogMutation.mutate(formData);
    }
  };

  // Show login form if not authenticated
  if (isAuthenticated === false) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  // Show loading while checking authentication
  if (isAuthenticated === null || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <SEOHead 
        title="Blog Admin - Kirpal Securities"
        description="Manage blog posts and articles"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-black text-gradient">Blog Admin</h1>
            <div className="flex gap-4">
              <Button
                onClick={startCreate}
                className="bg-gradient-primary text-white"
                data-testid="create-blog-button"
              >
                <Plus className="mr-2" size={20} />
                New Blog
              </Button>
              <Button
                variant="outline"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
                data-testid="logout-button"
              >
                <LogOut className="mr-2" size={20} />
                Logout
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Blog List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Existing Blogs</h2>
              {blogs.map((blog) => (
                <Card key={blog.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-2">{blog.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{blog.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => startEdit(blog)}
                        data-testid={`edit-blog-${blog.id}`}
                      >
                        <Edit size={16} className="mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`/blogs`, '_blank')}
                        data-testid={`view-blog-${blog.id}`}
                      >
                        <Eye size={16} className="mr-1" />
                        View
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this blog?')) {
                            deleteBlogMutation.mutate(blog.id);
                          }
                        }}
                        data-testid={`delete-blog-${blog.id}`}
                      >
                        <Trash2 size={16} className="mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Blog Form */}
            <AnimatePresence mode="wait">
              {(editingBlog || isCreating) && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>
                          {editingBlog ? "Edit Blog" : "Create New Blog"}
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={resetForm}
                          data-testid="cancel-form"
                        >
                          <X size={20} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="title"
                            value={formData.title}
                            onChange={(e) => handleTitleChange(e.target.value)}
                            required
                            data-testid="blog-title-input"
                          />
                        </div>

                        <div>
                          <Label htmlFor="slug">Slug</Label>
                          <Input
                            id="slug"
                            value={formData.slug}
                            onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                            required
                            data-testid="blog-slug-input"
                          />
                        </div>

                        <div>
                          <Label htmlFor="excerpt">Excerpt</Label>
                          <Textarea
                            id="excerpt"
                            value={formData.excerpt}
                            onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                            required
                            rows={3}
                            data-testid="blog-excerpt-input"
                          />
                        </div>

                        <div>
                          <Label htmlFor="content">Content</Label>
                          <Textarea
                            id="content"
                            value={formData.content}
                            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                            required
                            rows={6}
                            data-testid="blog-content-input"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="author">Author</Label>
                            <Input
                              id="author"
                              value={formData.author}
                              onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                              required
                              data-testid="blog-author-input"
                            />
                          </div>

                          <div>
                            <Label htmlFor="readTime">Read Time</Label>
                            <Input
                              id="readTime"
                              value={formData.readTime}
                              onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                              placeholder="5 min read"
                              required
                              data-testid="blog-read-time-input"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="category">Category</Label>
                          <select
                            id="category"
                            value={formData.category}
                            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red dark:border-gray-600 dark:bg-gray-800"
                            required
                            data-testid="blog-category-select"
                          >
                            {categories.map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="image">Image URL</Label>
                          <Input
                            id="image"
                            value={formData.image}
                            onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                            placeholder="https://example.com/image.jpg"
                            required
                            data-testid="blog-image-input"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-primary text-white"
                          disabled={createBlogMutation.isPending || updateBlogMutation.isPending}
                          data-testid="submit-blog-form"
                        >
                          <Save className="mr-2" size={20} />
                          {editingBlog ? "Update Blog" : "Create Blog"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}