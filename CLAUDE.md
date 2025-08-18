# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite project for Jingyi Zou's official website. It uses React 19 with modern tooling including ESLint for linting and Vite for fast development and building.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production 
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
  ├── main.jsx          # Application entry point
  ├── App.jsx           # Main App component
  ├── App.css           # App-specific styles
  ├── index.css         # Global styles
  └── assets/           # Static assets (images, icons)
public/                 # Public static files
index.html              # HTML template
```

## Architecture Notes

- **Build Tool**: Vite with React plugin for fast development and optimized builds
- **React Version**: 19.1.1 (latest) with React DOM
- **Module System**: ES modules (`type: "module"` in package.json)
- **Entry Point**: `src/main.jsx` renders the App component into `#root` div
- **Styling**: CSS files imported directly into components
- **Linting**: ESLint with React hooks and React refresh plugins, custom rule for unused vars with pattern matching

## ESLint Configuration

The project uses a modern ESLint flat config with:
- React hooks rules for proper hook usage
- React refresh plugin for HMR compatibility
- Custom rule: unused variables starting with capital letters or underscores are ignored
- Targets browser globals and latest ECMAScript features