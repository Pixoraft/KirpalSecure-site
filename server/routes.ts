import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogSchema, updateBlogSchema, adminLoginSchema } from "@shared/schema";

const SITE = "https://kirpalsecurities.in";
const TODAY = new Date().toISOString().split("T")[0];

const EF_SLUGS = [
  "jalandhar","ludhiana","amritsar","pathankot","hoshiarpur","phagwara",
  "kapurthala","nakodar","patiala","mohali","bathinda","gurdaspur","moga",
  "sangrur","barnala","firozpur","rupnagar","fatehgarh-sahib","fazilka",
  "muktsar","tarn-taran","mansa","nawanshahr","malerkotla",
];

const CCTV_SLUGS = [
  "jalandhar","ludhiana","amritsar","patiala","mohali","bathinda","phagwara",
  "kapurthala","hoshiarpur","pathankot","gurdaspur","moga","nakodar","sangrur",
  "rupnagar","firozpur","tarn-taran","nawanshahr",
];

function buildSitemap(blogSlugs: string[]): string {
  const url = (loc: string, priority: string, changefreq: string, lastmod = TODAY) =>
    `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

  const lines: string[] = [];

  // Core pages
  lines.push(url(`${SITE}/`, "1.0", "weekly"));
  lines.push(url(`${SITE}/services`, "0.9", "monthly"));
  lines.push(url(`${SITE}/packages`, "0.9", "monthly"));
  lines.push(url(`${SITE}/about`, "0.7", "monthly"));
  lines.push(url(`${SITE}/contact`, "0.8", "monthly"));
  lines.push(url(`${SITE}/blogs`, "0.7", "weekly"));
  lines.push(url(`${SITE}/privacy-policy`, "0.3", "yearly"));
  lines.push(url(`${SITE}/terms-conditions`, "0.3", "yearly"));

  // Industry-specific CCTV pages
  lines.push(url(`${SITE}/best-cctv-camera-for-school`, "0.92", "weekly"));
  lines.push(url(`${SITE}/best-cctv-camera-for-factory`, "0.92", "weekly"));
  lines.push(url(`${SITE}/best-cctv-camera-for-warehouse`, "0.92", "weekly"));
  lines.push(url(`${SITE}/best-cctv-camera-for-office`, "0.92", "weekly"));
  lines.push(url(`${SITE}/best-cctv-camera-for-hospital`, "0.92", "weekly"));
  lines.push(url(`${SITE}/best-cctv-camera-for-commercial-buildings`, "0.92", "weekly"));

  // Near-me intent pages
  lines.push(url(`${SITE}/electric-fence-installation-near-me`, "0.93", "weekly"));
  lines.push(url(`${SITE}/cctv-installation-near-me`, "0.93", "weekly"));
  lines.push(url(`${SITE}/cctv-camera-service-near-me`, "0.93", "weekly"));

  // Electric Fence pillar + cities
  lines.push(url(`${SITE}/electric-fence-installation-punjab`, "0.95", "weekly"));
  for (const slug of EF_SLUGS) {
    lines.push(url(`${SITE}/electric-fence-installation-${slug}`, "0.9", "weekly"));
  }

  // CCTV pillar + cities
  lines.push(url(`${SITE}/cctv-camera-installation-punjab`, "0.95", "weekly"));
  for (const slug of CCTV_SLUGS) {
    lines.push(url(`${SITE}/cctv-camera-installation-${slug}`, "0.9", "weekly"));
  }

  // Blog pages
  for (const slug of blogSlugs) {
    lines.push(url(`${SITE}/blog/${slug}`, "0.7", "monthly"));
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lines.join("\n")}\n</urlset>`;
}

// Simple admin password - in production, this should be hashed and stored securely
const ADMIN_PASSWORD = "admin123"; // Change this to a secure password

// Extend Request type to include session
interface AuthenticatedRequest extends Request {
  session: any;
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

  // Dynamic sitemap — auto-includes all city pages + live blog posts
  app.get("/sitemap.xml", async (_req, res) => {
    try {
      const blogs = await storage.getAllBlogs();
      const blogSlugs = blogs.map((b: any) => b.slug);
      const xml = buildSitemap(blogSlugs);
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.send(xml);
    } catch {
      res.status(500).send("Failed to generate sitemap");
    }
  });

  // SEO Landing Pages for Better Search Rankings
  app.get('/security-services-jalandhar', (req, res) => {
    res.redirect(301, '/');
  });
  
  app.get('/cctv-installation-jalandhar', (req, res) => {
    res.redirect(301, '/services');
  });
  
  app.get('/home-security-systems-punjab', (req, res) => {
    res.redirect(301, '/services');
  });
  
  app.get('/biometric-systems-jalandhar', (req, res) => {
    res.redirect(301, '/services');
  });

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

  app.get("/api/blogs/:slug", async (req, res) => {
    try {
      const blog = await storage.getBlogBySlug(req.params.slug);
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
