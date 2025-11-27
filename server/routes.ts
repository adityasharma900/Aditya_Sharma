import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Route to download CV PDF
  app.get("/api/download-cv", (req, res) => {
    const cvPath = path.join(process.cwd(), "attached_assets", "Updated_CV_milan_1764228958624.pdf");
    
    if (fs.existsSync(cvPath)) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=Aditya_Sharma_CV.pdf");
      const fileStream = fs.createReadStream(cvPath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({ error: "CV file not found" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false,
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false,
          error: "Failed to submit contact form" 
        });
      }
    }
  });

  return httpServer;
}
