import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { Blog } from "@shared/schema";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: blog, isLoading, error } = useQuery({
    queryKey: ['/api/blogs', slug],
    queryFn: () => fetch(`/api/blogs/${slug}`).then(res => {
      if (!res.ok) throw new Error('Blog not found');
      return res.json();
    }) as Promise<Blog>,
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blogs">
            <Button className="bg-gradient-primary text-white">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blogs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${blog.title} | Kirpal Securities`}
        description={blog.excerpt}
        keywords={`${blog.category.toLowerCase()}, security, kirpal securities, ${blog.title.toLowerCase()}`}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <section className="relative bg-gradient-primary text-white py-16 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blogs">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 mb-6"
                data-testid="back-to-blogs"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to All Articles
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                {blog.title}
              </h1>
              <p className="text-xl opacity-90 mb-6">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {blog.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {blog.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {blog.content}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Need Security Solutions?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Contact Kirpal Securities for professional installation and consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-primary text-white">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}