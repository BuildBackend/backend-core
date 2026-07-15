import app from "./app.js";
import { env } from "./config/env.js";
import { prisma } from "./config/prisma.js";

async function startServer() {
  try {
    await prisma.$connect();

    console.log("✅ Connected to PostgreSQL");

    app.listen(env.PORT, () => {
      console.log("🚀 BuildBackend Core started successfully");
      console.log(`🌍 Environment: ${env.NODE_ENV}`);
      console.log(`📡 Server: http://localhost:${env.PORT}`);
      console.log(`📖 Swagger: http://localhost:${env.PORT}/api/docs`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to PostgreSQL");
    console.error(error);
    process.exit(1);
  }
}

startServer();