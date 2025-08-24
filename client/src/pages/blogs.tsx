import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Search, Filter } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock blog data - in a real app, this would come from your backend
const blogPosts = [
  {
    id: 1,
    title: "Top 10 CCTV Security Tips for Your Home in 2025",
    excerpt: "Learn the essential security camera placement strategies and maintenance tips to maximize your home's protection.",
    author: "Security Expert Team",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Security Tips",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    slug: "top-10-cctv-security-tips-2025"
  },
  {
    id: 2,
    title: "Biometric Access Control: The Future of Business Security",
    excerpt: "Discover how biometric systems are revolutionizing workplace security with fingerprint and facial recognition technology.",
    author: "Tech Innovator",
    date: "2025-01-12",
    readTime: "6 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    slug: "biometric-access-control-future"
  },
  {
    id: 3,
    title: "Smart Home Security Systems: What to Consider in Jalandhar",
    excerpt: "A comprehensive guide to choosing the right smart security system for homes in Jalandhar's urban landscape.",
    author: "Local Security Advisor",
    date: "2025-01-10",
    readTime: "10 min read",
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    slug: "smart-home-security-jalandhar"
  },
  {
    id: 4,
    title: "Network Security Best Practices for Small Businesses",
    excerpt: "Protect your business network from cyber threats with these essential security measures and monitoring techniques.",
    author: "Network Specialist",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Network Security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    slug: "network-security-best-practices"
  },
  {
    id: 5,
    title: "The Ultimate Guide to Video Door Phone Systems",
    excerpt: "Everything you need to know about video intercom systems, installation, and choosing the right features for your property.",
    author: "Installation Expert",
    date: "2025-01-05",
    readTime: "9 min read",
    category: "Intercom Systems",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    slug: "video-door-phone-systems-guide"
  }
];

const categories = ["All", "Security Tips", "Technology", "Smart Home", "Network Security", "Intercom Systems"];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Filter posts based on search and category
  const handleFilter = () => {
    let filtered = blogPosts;
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(filtered);
  };

  // Handle filter on search/category change
  useState(() => {
    handleFilter();
  });

  return (
    <>
      <SEOHead
        title="Security Blogs & Tips - Expert Insights | Kirpal Securities"
        description="Stay updated with the latest security tips, technology insights, and expert advice from Kirpal Securities. Learn about CCTV, home security, biometric systems, and more."
        keywords="security blogs, CCTV tips, home security advice, biometric technology, smart home security, network security"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-display">
              Security Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Expert tips, industry insights, and the latest security technology trends
            </p>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full animate-bounce-slow"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-modern p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handleFilter();
                  }}
                  className="pl-10 h-12 text-lg"
                  data-testid="search-input"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setSelectedCategory(category);
                        handleFilter();
                      }}
                      className={selectedCategory === category ? "bg-gradient-primary text-white" : ""}
                      data-testid={`filter-${category.toLowerCase().replace(" ", "-")}`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="card-modern p-0 overflow-hidden group hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`blog-post-${post.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-brand-red transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-brand-red hover:text-brand-red-dark p-0 h-auto font-semibold group/btn"
                      data-testid={`read-more-${post.id}`}
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="text-gray-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search terms or browse different categories.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setFilteredPosts(blogPosts);
                  }}
                  className="bg-gradient-primary text-white"
                  data-testid="clear-filters"
                >
                  Clear Filters
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Security Insights</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest security tips and industry updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 text-gray-900"
                data-testid="newsletter-email"
              />
              <Button
                className="bg-white text-brand-red hover:bg-gray-100 h-12 px-8 font-semibold"
                data-testid="newsletter-subscribe"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}