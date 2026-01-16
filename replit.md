# Sentinel Digital Capital

## Overview
Sentinel Digital Capital is a secure, scalable web platform for digital asset investment management. Built with Next.js and Tailwind CSS, it provides investor onboarding, portfolio tracking, transaction management, and administrative controls.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js 20

## Project Structure
```
src/
├── app/
│   ├── globals.css      # Global Tailwind styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
└── components/
    ├── Footer.tsx       # Footer component
    └── Navbar.tsx       # Navigation bar
```

## Development
- Run `npm run dev` to start the development server on port 5000
- The app is configured to accept all hosts for Replit proxy compatibility

## Build & Production
- Run `npm run build` to build for production
- Run `npm start` to start the production server

## Configuration Files
- `next.config.js` - Next.js configuration with allowed dev origins
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration for Tailwind
