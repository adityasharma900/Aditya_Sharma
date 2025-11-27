import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

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

  return httpServer;
}
