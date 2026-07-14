# 📁 BuildBackend Core Folder Structure

## Overview

BuildBackend Core follows a modular and layered architecture designed for scalability, maintainability, and reusability.

The project structure aims to:

- Keep business logic isolated
- Separate responsibilities clearly
- Improve developer experience
- Support enterprise-grade applications
- Serve as the foundation for all BuildBackend products

---

# Project Structure

```text
backend-core/
│
├── docs/                  # Project documentation
├── docker/                # Docker configuration
├── tests/                 # Unit and integration tests
├── src/
│   ├── config/            # Application configuration
│   ├── constants/         # Global constants
│   ├── middlewares/       # Express middlewares
│   ├── modules/           # Feature modules
│   ├── repositories/      # Database access layer
│   ├── routes/            # Route registration
│   ├── services/          # Business logic
│   ├── types/             # Global TypeScript types
│   ├── utils/             # Utility functions
│   ├── validators/        # Request validation
│   └── server.ts          # Application entry point
│
├── .github/               # GitHub workflows and templates
├── .env.example           # Environment variable template
├── package.json
├── tsconfig.json
└── README.md
```

---

# Folder Responsibilities

## docs/

Contains project documentation, architecture, coding standards, API guidelines, and roadmap.

---

## docker/

Contains Docker and Docker Compose configuration files.

---

## tests/

Contains unit, integration, and future end-to-end tests.

---

## src/config/

Application configuration.

Examples:

- Database
- JWT
- Logger
- Environment

---

## src/constants/

Application-wide constant values.

Examples:

- Roles
- Permissions
- Messages
- HTTP Status Codes

---

## src/middlewares/

Express middleware.

Examples:

- Authentication
- Authorization
- Error Handling
- Rate Limiting

---

## src/modules/

Feature-based modules.

Example:

```text
modules/

auth/

user/

role/

permission/
```

Each module should contain:

```text
auth/

auth.controller.ts

auth.service.ts

auth.repository.ts

auth.routes.ts

auth.validation.ts

auth.types.ts
```

---

## src/repositories/

Handles database communication.

Repositories should never contain business logic.

---

## src/routes/

Registers application routes.

---

## src/services/

Contains business logic.

Services communicate with repositories.

---

## src/types/

Global TypeScript interfaces and types.

---

## src/utils/

Reusable helper functions.

Examples:

- Encryption
- Date utilities
- Response helpers
- File utilities

---

## src/validators/

Validation schemas.

Preferred library:

- Zod

---

# Architecture Flow

```text
Client

↓

Route

↓

Middleware

↓

Controller

↓

Service

↓

Repository

↓

Database
```

Business logic must always remain inside the Service layer.

Controllers should remain thin.

Repositories should only communicate with the database.

---

# Design Principles

BuildBackend follows these principles:

- Single Responsibility Principle
- Separation of Concerns
- Modular Architecture
- Clean Code
- Secure by Default
- Production Ready

---

# Future Expansion

The structure is designed to support future BuildBackend products including:

- Authentication Starter
- SaaS Starter
- Hospital Management
- School ERP
- Church Management
- CRM
- HRMS
- Inventory Management

All products will follow this same folder structure.