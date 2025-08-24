import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogSchema, updateBlogSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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

  app.post("/api/blogs", async (req, res) => {
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

  app.put("/api/blogs/:id", async (req, res) => {
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

  app.delete("/api/blogs/:id", async (req, res) => {
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
