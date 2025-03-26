# Skip Select

A modern, responsive React application for selecting and customizing skip hire services. This project reimagines the skip selection experience with a focus on user experience, accessibility, and modern design principles.

## Development Approach

The development approach combines several modern techniques and technologies to create a polished, maintainable application:

### Component Architecture
- **Card Variants**: Multiple card styles (Standard, Animated, Glossy, Horizontal) offering different UX approaches
- **Composable Components**: Built with reusability in mind, sharing common elements while maintaining distinct visual identities
- **Atomic Design**: Structured using atomic design principles, from basic elements to complex organisms

### Styling Implementation
- **Tailwind CSS**: Utilized for rapid development and consistent design tokens
- **Glass Morphism**: Implemented modern glass effects with backdrop-blur and translucent overlays
- **Motion Design**: Framer Motion for fluid animations and micro-interactions
  - Hover effects with 3D perspective
  - Smooth transitions between states
  - Interactive card flips
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Theme System**: Dynamic theme switching with consistent color palettes

### User Experience
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Loading States**: Smooth loading transitions
- **Error Handling**: Graceful error states with helpful user feedback
- **Micro-interactions**: Subtle animations to enhance user engagement
- **Accessibility**: WCAG 2.1 compliant with proper ARIA attributes


### AI Assistance
 leveraged AI tools strategically to enhance development efficiency:

- **Accessibility Implementation**: Used AI to generate and validate ARIA labels and roles
- **Repetitive Tasks**: Automated routine code modifications across similar components
- **Style Consistency**: AI-powered validation of design token usage

This combination of modern development practices, thoughtful design choices, and strategic AI utilization has resulted in a highly polished, accessible, and maintainable application.

## 🚀 Technologies Used

- **Vite** - Next-generation frontend tooling with instant HMR and optimized build
- **React 19** - Latest version of React
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Latest version with advanced features and better performance
- **Framer Motion** - Smooth animations and transitions
- **React Query** - Data fetching and caching
- **React Router** - Client-side routing
- **localStorage** - Persisting user preferences
- **Biome.js** - Fast and modern formatter and linter for JavaScript/TypeScript

## 🎨 Design System

### Theme Management

- **Dynamic Theme Switching** - Seamless switching between light and dark modes
- **CSS Variables** - Theme-aware color system using CSS custom properties
- **Color Schemes** - Multiple color palettes with both light and dark variants:
  - Orange (Default)
  - Blue
  - Green
  - Purple
  - Red

### Components

#### Cards
- **HorizontalCard** - Main skip display component
  - Responsive layout (vertical on mobile, horizontal on desktop)
  - Status indicators
  - Feature grid
  - Action buttons

#### Interactive Elements
- **GlossyCard** - Glass-morphism effect with:
  - Dynamic reflections
  - Hover states
  - Background blur
  - Border highlights

- **GlossyActionButton** - Interactive buttons with:
  - Hover animations
  - Active states
  - Glass effect
  - Responsive touch targets

#### Drawer System
- **SkipDetailsDrawer** - Bottom sheet component with:
  - Spring-based animations
  - Backdrop blur
  - Price breakdown
  - Action buttons
  - Mobile-optimized layout

## 💫 Animations & Transitions

- **Page Transitions**
  - Fade-in animations
  - Slide-up effects
  - Staggered loading

- **Interactive Animations**
  - Button hover/tap effects
  - Card flip animations
  - Drawer slide transitions
  - Color theme transitions

- **Micro-interactions**
  - Scale effects on hover
  - Smooth color transitions
  - Loading states
  - Focus indicators

## 🧱 Code Architecture

### Component Structure
- **Atomic Design Principles**
  - Atoms (buttons, inputs)
  - Molecules (card sections)
  - Organisms (complete cards)
  - Templates (layouts)

- **Component Breakdown**
  - Small, focused components
  - Clear separation of concerns
  - Reusable patterns
  - Type-safe props

### State Management
- **React Query for API Data**
  - Automatic caching
  - Loading states
  - Error handling
  - Data invalidation

- **Theme Context**
  - Global theme state
  - Color scheme management
  - Persistent preferences

## 📱 Responsive Design

- **Mobile-First Approach**
  - Fluid typography
  - Responsive spacing
  - Adaptive layouts
  - Touch-friendly interactions

- **Breakpoint System**
  - Small devices (< 640px)
  - Medium devices (≥ 768px)
  - Large devices (≥ 1024px)
  - Extra large (≥ 1280px)

## 🎯 UI/UX Improvements

### Accessibility
- **WCAG Compliance**
  - Color contrast
  - Keyboard navigation
  - Screen reader support
  - Focus management

### User Experience
- **Intuitive Navigation**
  - Clear visual hierarchy
  - Consistent interactions
  - Informative feedback
  - Error prevention

### Performance
- **Optimizations**
  - Code splitting
  - Transition performance

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/codeashdev/skip-select.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```


