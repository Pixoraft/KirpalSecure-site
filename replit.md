# Overview

This is a modern full-stack security solutions business website for Kirpal Securities, built with React, TypeScript, and Express.js. The application serves as a professional web presence for a security company offering CCTV installation, home security systems, biometric devices, networking solutions, and repair services in Jalandhar, India. The frontend provides a responsive, SEO-optimized marketing website with service pages, contact forms, and business information, while the backend is set up with a REST API structure and database integration capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **UI Framework**: Radix UI components with shadcn/ui design system for consistent, accessible interface elements
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript with ES modules for type safety and modern JavaScript features
- **Development**: Hot reloading with Vite integration for seamless development experience
- **Build**: esbuild for fast production builds with external package bundling
- **Storage Interface**: Abstracted storage layer with in-memory implementation and database-ready interface

## Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL integration
- **Schema**: Centralized schema definitions in shared directory with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Session Storage**: PostgreSQL session store with connect-pg-simple for user sessions

## Authentication and Authorization
- **Schema**: User model with username/password authentication ready
- **Session Management**: Express session handling with PostgreSQL backing store
- **Validation**: Zod schemas for input validation and type safety
- **Storage Interface**: CRUD operations abstracted for user management

## External Dependencies
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **UI Components**: Radix UI primitives for accessible component foundation
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)
- **Icons**: Lucide React for consistent iconography
- **Development Tools**: Replit integration for development environment and error handling
- **Image Assets**: Unsplash for stock photography in service demonstrations