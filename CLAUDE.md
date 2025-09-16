# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page project for "Opens" - a business solution that transforms customer service into sustainable growth. The application is built with the App Router architecture and is optimized for Docker deployment on EasyPanel.

## Development Commands

### Core Commands
- **Development**: `npm run dev --turbopack` (uses Turbopack for faster builds)
- **Build**: `npm run build`
- **Start**: `npm start`
- **Lint**: `npm run lint`

### Docker Commands
- **Local build test**: `./build-debug.sh` (debug script for troubleshooting builds)
- **Docker Compose**: `docker-compose up --build`

## Architecture & Structure

### Next.js Configuration
- **Output mode**: `standalone` (required for Docker deployment)
- **ESLint**: Disabled during builds (`eslint.ignoreDuringBuilds: true`)
- **App Router**: Uses the modern App Router architecture with `app/` directory

### Component Architecture
The project follows a modular component structure:

- **Main page**: `app/page.tsx` - Client component that orchestrates all sections
- **Layout**: `app/layout.tsx` - Root layout with Plus Jakarta Sans font and comprehensive SEO
- **UI Components**: All in `components/ui/` directory following a consistent pattern:
  - `header.tsx` - Navigation header
  - `hero-section.tsx` - Hero section with CTA
  - `clients-section.tsx` - Client testimonials/logos
  - `solution-overview.tsx` - Solution overview section
  - `crf-pillars.tsx` - CRF (Conversion, Retention, Fidelization) pillars
  - `strategic-differentials.tsx` - Strategic differentials section
  - `results-section.tsx` - Results and metrics section
  - `cta-section.tsx` - Call-to-action section
  - `footer.tsx` - Site footer

### Styling System
- **Framework**: Tailwind CSS with custom configuration
- **Design System**: Uses CSS custom properties with HSL values for theming
- **Utility**: `lib/utils.ts` contains `cn()` function for conditional class merging
- **Font**: Plus Jakarta Sans with multiple weights (400, 500, 600, 700, 800)
- **Animation**: Includes Framer Motion for animations and custom Tailwind animations

### Path Mapping
- **Alias**: `@/*` maps to project root (configured in `tsconfig.json`)
- **Import style**: Use `@/components/ui/component-name` for UI components
- **Utilities**: Import from `@/lib/utils`

## Docker & Deployment

### Docker Configuration
- **Multi-stage build**: Optimized Dockerfile with build and runtime stages
- **Base image**: `node:18-alpine` for smaller image size
- **User security**: Runs as non-root user (`nextjs:nodejs`)
- **Port**: Exposes port 3000
- **Health check**: Configured in docker-compose.yml

### EasyPanel Specific
- **Standalone mode**: Required for EasyPanel deployment
- **Build optimization**: All dependencies installed during build
- **ESLint bypass**: Disabled during Docker builds to prevent deployment failures

### Environment Variables
- `NODE_ENV=production`
- `PORT=3000`
- `HOSTNAME="0.0.0.0"`

## Development Guidelines

### Component Patterns
- All UI components are in `components/ui/` directory
- Import components with full path: `@/components/ui/component-name`
- Use the `cn()` utility for conditional styling
- Follow TypeScript strict mode conventions

### Styling Guidelines
- Use Tailwind CSS classes consistently
- Leverage the custom color system defined in `tailwind.config.ts`
- Use CSS custom properties for theme colors
- Implement responsive design with Tailwind breakpoints

### TypeScript Configuration
- **Target**: ES2017
- **Strict mode**: Enabled
- **Module resolution**: Bundler (Next.js optimized)
- **JSX**: Preserve (handled by Next.js)

## Build Optimization

### ESLint Configuration
- **Modern config**: Uses flat config format (`eslint.config.mjs`)
- **TypeScript support**: Full TypeScript ESLint integration
- **React rules**: Optimized for React 19+ (no need for React imports)
- **Build bypass**: ESLint is disabled during Docker builds

### Build Process
1. Dependencies installation with cache clearing
2. Component verification
3. Next.js build with standalone output
4. Docker image creation with non-root user
5. Health check configuration

## Troubleshooting

### Common Build Issues
- **Missing components**: Verify all components exist in `components/ui/`
- **ESLint errors**: Use `npm run lint` for development, builds skip ESLint
- **Docker build fails**: Run `./build-debug.sh` for detailed debugging
- **Module resolution**: Ensure `@/*` path mapping is correct in imports

### Development Issues
- **Turbopack**: Development uses Turbopack for faster builds
- **Font loading**: Plus Jakarta Sans is optimized with Next.js font system
- **Type checking**: All components use TypeScript with strict mode