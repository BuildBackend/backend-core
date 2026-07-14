import express from "express";
import swaggerUi from "swagger-ui-express";

import { env } from "./config/env.js";
import { swaggerSpec } from "./config/swagger.js";

const app = express();

// Middlewares
app.use(express.json());

// Swagger
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Server is healthy
 */

// Health Check
app.get("/health", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy",
        timestamp: new Date().toISOString(),
    });
});

// Start Server
app.listen(env.PORT, () => {
    console.log("🚀 BuildBackend Core started successfully");
    console.log(`🌍 Environment: ${env.NODE_ENV}`);
    console.log(`📡 Server: http://localhost:${env.PORT}`);
    console.log(`📖 Swagger: http://localhost:${env.PORT}/api/docs`);
});