import { type User, type InsertUser, type Blog, type InsertBlog, type UpdateBlog } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog methods
  getAllBlogs(): Promise<Blog[]>;
  getBlog(id: string): Promise<Blog | undefined>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  updateBlog(id: string, blog: UpdateBlog): Promise<Blog | undefined>;
  deleteBlog(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogs: Map<string, Blog>;

  constructor() {
    this.users = new Map();
    this.blogs = new Map();
    
    // Initialize with sample blog data
    this.initializeBlogs();
  }

  private initializeBlogs() {
    const sampleBlogs: InsertBlog[] = [
      {
        title: "Top 10 CCTV Security Tips for Your Home in 2025",
        excerpt: "Learn the essential security camera placement strategies and maintenance tips to maximize your home's protection.",
        content: "Learn the essential security camera placement strategies and maintenance tips to maximize your home's protection. This comprehensive guide covers everything you need to know.",
        author: "Security Expert Team",
        category: "Security Tips",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        slug: "top-10-cctv-security-tips-2025",
        readTime: "8 min read"
      },
      {
        title: "Biometric Access Control: The Future of Business Security",
        excerpt: "Discover how biometric systems are revolutionizing workplace security with fingerprint and facial recognition technology.",
        content: "Discover how biometric systems are revolutionizing workplace security with fingerprint and facial recognition technology. Modern biometric systems offer unprecedented security.",
        author: "Tech Innovator",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        slug: "biometric-access-control-future",
        readTime: "6 min read"
      }
    ];

    sampleBlogs.forEach(blog => {
      const id = randomUUID();
      const now = new Date();
      const fullBlog: Blog = { 
        ...blog, 
        id, 
        createdAt: now,
        updatedAt: now
      };
      this.blogs.set(id, fullBlog);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogs(): Promise<Blog[]> {
    return Array.from(this.blogs.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getBlog(id: string): Promise<Blog | undefined> {
    return this.blogs.get(id);
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    return Array.from(this.blogs.values()).find(blog => blog.slug === slug);
  }

  async createBlog(insertBlog: InsertBlog): Promise<Blog> {
    const id = randomUUID();
    const now = new Date();
    const blog: Blog = { 
      ...insertBlog, 
      id, 
      createdAt: now,
      updatedAt: now
    };
    this.blogs.set(id, blog);
    return blog;
  }

  async updateBlog(id: string, updateBlog: UpdateBlog): Promise<Blog | undefined> {
    const existingBlog = this.blogs.get(id);
    if (!existingBlog) return undefined;

    const now = new Date();
    const updatedBlog: Blog = { 
      ...existingBlog, 
      ...updateBlog, 
      updatedAt: now
    };
    this.blogs.set(id, updatedBlog);
    return updatedBlog;
  }

  async deleteBlog(id: string): Promise<boolean> {
    return this.blogs.delete(id);
  }
}

export const storage = new MemStorage();
