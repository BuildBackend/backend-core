import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BuildBackend Core API",
      version: "1.0.0",
      description: "Production-ready Node.js + TypeScript backend starter"
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ]
  },
  apis: ["./src/routes/*.ts", "./src/modules/**/*.ts"]
};

export const swaggerSpec = swaggerJsdoc(options);