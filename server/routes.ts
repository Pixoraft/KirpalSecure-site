import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogSchema, updateBlogSchema, adminLoginSchema } from "@shared/schema";

// Simple admin password - in production, this should be hashed and stored securely
const ADMIN_PASSWORD = "admin123"; // Change this to a secure password

// Extend Request type to include session
interface AuthenticatedRequest extends Request {
  session: {
    isAdminAuthenticated?: boolean;
    [key: string]: any;
  };
}

// Middleware to check admin authentication
const requireAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (req.session?.isAdminAuthenticated) {
    next();
  } else {
    res.status(401).json({ message: "Authentication required" });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin authentication routes
  app.post("/api/admin/login", async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { password } = adminLoginSchema.parse(req.body);
      
      if (password === ADMIN_PASSWORD) {
        req.session.isAdminAuthenticated = true;
        res.json({ success: true, message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid request" });
    }
  });

  app.post("/api/admin/logout", (req: AuthenticatedRequest, res: Response) => {
    req.session.isAdminAuthenticated = false;
    res.json({ message: "Logged out successfully" });
  });

  app.get("/api/admin/status", (req: AuthenticatedRequest, res: Response) => {
    res.json({ isAuthenticated: !!req.session?.isAdminAuthenticated });
  });
  // Blog routes
  app.get("/api/blogs", async (req, res) => {
    try {
      const blogs = await storage.getAllBlogs();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blogs" });
    }
  });

  app.get("/api/blogs/:id", async (req, res) => {
    try {
      const blog = await storage.getBlog(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog" });
    }
  });

  app.post("/api/blogs", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
    try {
      const validatedData = insertBlogSchema.parse(req.body);
      
      // Check if slug already exists
      const existingBlog = await storage.getBlogBySlug(validatedData.slug);
      if (existingBlog) {
        return res.status(400).json({ message: "Blog with this slug already exists" });
      }
      
      const blog = await storage.createBlog(validatedData);
      res.status(201).json(blog);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ message: "Invalid blog data", errors: error });
      }
      res.status(500).json({ message: "Failed to create blog" });
    }
  });

  app.put("/api/blogs/:id", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
    try {
      const validatedData = updateBlogSchema.parse(req.body);
      
      // If slug is being updated, check if it already exists (excluding current blog)
      if (validatedData.slug) {
        const existingBlog = await storage.getBlogBySlug(validatedData.slug);
        if (existingBlog && existingBlog.id !== req.params.id) {
          return res.status(400).json({ message: "Blog with this slug already exists" });
        }
      }
      
      const blog = await storage.updateBlog(req.params.id, validatedData);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json(blog);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ message: "Invalid blog data", errors: error });
      }
      res.status(500).json({ message: "Failed to update blog" });
    }
  });

  app.delete("/api/blogs/:id", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
    try {
      const success = await storage.deleteBlog(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json({ message: "Blog deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete blog" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
