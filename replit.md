# Portfolio Website - Aditya Sharma

## Overview

This is a modern, professional portfolio website for Aditya Sharma, a Master's student in Computer Science at the University of Milan. The application is built as a full-stack TypeScript project featuring a React frontend with shadcn/ui components and an Express backend. The portfolio showcases professional experience, projects, skills, and educational background with a clean, asymmetric grid design inspired by modern portfolio leaders like Linear, Notion, and Stripe.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Client-side routing handled by Wouter (lightweight alternative to React Router)
- React Query (@tanstack/react-query) for server state management and data fetching

**UI Component System**
- shadcn/ui component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Dark mode support with theme toggle functionality
- Framer Motion for animations and micro-interactions
- Custom design system following typography hierarchy defined in design guidelines

**Styling Approach**
- Tailwind CSS configured with custom color palette using HSL color space
- CSS variables for theme switching (light/dark mode)
- Custom spacing primitives and border radius values
- Component variants using class-variance-authority (CVA)
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- HTTP server wrapper for potential WebSocket support
- Custom logging middleware for request/response tracking
- JSON body parsing with raw body preservation for webhook support

**API Structure**
- RESTful endpoint for CV download (`/api/download-cv`)
- Static file serving for production builds
- SPA fallback routing for client-side navigation
- File streaming for PDF downloads from attached_assets directory

**Development vs Production**
- Development mode uses Vite middleware for HMR
- Production mode serves pre-built static assets from dist/public
- Environment-specific configurations via NODE_ENV
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)

### Data Storage

**Database Configuration**
- Drizzle ORM configured for PostgreSQL (via @neondatabase/serverless)
- Schema definition in shared/schema.ts for type safety across frontend/backend
- User table with UUID primary keys, username, and password fields
- Zod schemas for runtime validation using drizzle-zod integration
- In-memory storage fallback (MemStorage class) for development/testing

**Storage Layer Abstraction**
- IStorage interface defining CRUD operations
- MemStorage implementation using Map for temporary data
- Designed to swap between in-memory and database storage
- User management methods: getUser, getUserByUsername, createUser

### Build System

**Build Process**
- Custom build script (script/build.ts) using esbuild for server bundling
- Vite build for optimized client bundle
- Server dependencies selectively bundled (allowlist approach) to reduce cold start times
- External dependencies excluded from server bundle to minimize size
- Output: dist/index.cjs (server) and dist/public (client)

**Module System**
- ESM modules throughout (type: "module" in package.json)
- Path aliases configured for clean imports (@/, @shared/, @assets/)
- TypeScript path mapping in tsconfig.json matching Vite resolve aliases

### External Dependencies

**UI Component Libraries**
- @radix-ui/* - Accessible, unstyled primitive components for building custom UI
- shadcn/ui - Pre-built, customizable components based on Radix UI
- framer-motion - Animation library for smooth transitions and micro-interactions
- lucide-react - Icon library for consistent iconography
- react-icons - Additional icon set (Si* icons for technology logos)

**Form Handling & Validation**
- react-hook-form - Forms with performance optimization
- @hookform/resolvers - Integration layer for validation schemas
- zod - TypeScript-first schema validation
- drizzle-zod - Bridge between Drizzle ORM and Zod schemas

**Styling & Design**
- tailwindcss - Utility-first CSS framework
- class-variance-authority - Type-safe component variants
- clsx & tailwind-merge - Utility for conditional class merging
- postcss & autoprefixer - CSS processing

**Database & ORM**
- drizzle-orm - TypeScript ORM for SQL databases
- @neondatabase/serverless - Serverless PostgreSQL driver
- drizzle-kit - CLI tools for migrations and schema management

**Session Management (Configured but Not Active)**
- express-session - Session middleware
- connect-pg-simple - PostgreSQL session store adapter
- Passport.js ecosystem ready for authentication (passport, passport-local)

**Development Tools**
- tsx - TypeScript execution for development
- @replit/* plugins - Replit-specific development enhancements
- Vite plugins for error overlay and development experience

**Date & Utility Libraries**
- date-fns - Modern date utility library
- nanoid - Unique ID generation
- cmdk - Command menu component

**Carousel & Interactive Components**
- embla-carousel-react - Carousel/slider functionality
- vaul - Drawer component library

### Design System

**Typography System**
- Primary font: DM Sans (modern, technical, highly readable)
- Accent font: Space Grotesk (for headings)
- Monospace: Fira Code and Geist Mono
- Defined hierarchy from hero text (6xl/7xl) down to metadata (sm uppercase)

**Color System**
- HSL-based color tokens for light and dark themes
- Semantic color naming (primary, secondary, muted, accent, destructive)
- Separate tokens for background, foreground, and border states
- CSS variables with alpha channel support

**Layout Principles**
- Asymmetric grid portfolio with split-screen hero section
- Consistent spacing using Tailwind units (4, 6, 8, 12, 16, 20, 24)
- Container max-width of 7xl with horizontal padding
- Section heights: 90vh for hero, py-24/py-16 for content sections