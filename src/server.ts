import { env } from "./config/env";

console.log("Starting BuildBackend...");
console.log(`Environment: ${env.NODE_ENV}`);
console.log(`Port: ${env.PORT}`);