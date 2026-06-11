# LuxeHaven Real Estate - Technical Documentation

This document describes the architectural features, installation guidelines, and advanced performance optimization techniques applied to the LuxeHaven Luxury Real Estate platform.

---

## 🌟 Core Features

1. **Dual-Theme Design System**:
   - Dynamic switching between **Light theme** (warm off-white backgrounds, slate text, gold bronze accents) and **Dark theme** (sleek obsidian-black space background, high-contrast crisp white text, and metallic accents).
   - High legibility score for low-vision users in dark mode, verified using high-contrast color values (`#f0f2f1` text on `#0b0d0c` background).

2. **Advanced Search & Listings Filter Panel**:
   - Multi-criteria real-time search: Keyword text, Buy/Rent status, Property Type select, slider-based Price limit, Bedrooms/Bathrooms count selectors, and checkbox checklists for specific amenities.
   - Powered by Zustand, allowing changes in filters on the Homepage search bar to seamlessly sync and render instantly when redirected to the Listings portal.

3. **Geospatial Map Integration**:
   - Interactive map rendered using Leaflet and OpenStreetMap.
   - **Custom HTML Price Tags**: Markers display property prices dynamically (e.g. "$4.9M" or "$12.5K") instead of generic pins. Active properties light up in gold.
   - **Auto-Pan Tracking**: Selecting a property in listings or map popups triggers a smooth animated pan-to-focus on the map.
   - **Dark Tiles Filter**: Map layers dynamically invert colors in dark mode to match the obsidian aesthetic.

4. **Dynamic Page Router**:
   - Lightweight, state-driven router in Zustand (`useNavigationStore`) that coordinates page transitions and handles scroll resets without routing library overhead.

5. **Type-Safe Form Handlers**:
   - Reusable forms (e.g., Contact Agent, general consultation forms) built on `react-hook-form` and validated using `zod` schemas. Submitting forms displays a modal popup confirming logging.

6. **Storybook Documentation**:
   - Interactive components documented using Storybook v8: `Button` and `Modal` (featuring interactive toggle triggers).

---

## 🚀 Installation & Launch Process

Follow these steps to set up and run the codebase locally:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### 2. Clone and Setup
Extract or navigate to the workspace directory:
```bash
# Verify you are in the project folder
cd dating_site
```

### 3. Install Dependencies
Install all production and development dependencies (including Storybook and Vitest tools):
```bash
npm install
```

### 4. Run Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 5. Launch Storybook Showcase
To run the interactive Storybook component library:
```bash
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) to explore Button, Card, and Modal stories.

### 6. Code Style & Quality Auditing
To format code and audit quality:
```bash
# Check formatting
npm run format:check

# Format files
npm run format:write

# Run linter
npm run lint
```

### 7. Compile Production Build
To build the minified production assets:
```bash
npm run build
```
The compiled output is saved in the `dist/` directory.

---

## ⚡ Applied Performance Techniques

The codebase has been engineered to maintain high Core Web Vitals scores and bundle efficiency:

### 1. Page-Level Lazy Loading & Code-Splitting
- **Approach**: Configured `React.lazy()` and `React.Suspense` inside [src/App.tsx](file:///C:/Users/rohit/Downloads/dating_site/src/App.tsx) to code-split individual page bundles. Since pages are exported as named variables, we utilized custom Promise mapping (e.g., `import('./pages/Home').then(m => ({ default: m.Home }))`) to enable lazy loading without modifying named export declarations.
- **Outcome**: The initial script bundle size dropped from **706 kB to 376 kB** (a **47% reduction**). Pages like `About`, `Services`, and `PropertyDetail` are downloaded on-demand only when requested.

### 2. Map Library Chunk Splitting
- **Approach**: The Leaflet map engine is relatively heavy. By keeping `PropertyMap` in a separate file and lazy-loading components, Vite's builder automatically separated the map code and Leaflet stylesheet into its own isolated asset chunk (`PropertyMap-VpHhTDam.js` - 162 kB).
- **Outcome**: Users landing on the Homepage or About page do not download any Map-related assets. The map library is only fetched when navigating to Listings or Details views.

### 3. Component Reuse & Layout Extraction
- **Approach**: Extracted repetitive layout elements across multiple page files into dedicated reusable UI components: [ContactCTA.tsx](file:///C:/Users/rohit/Downloads/dating_site/src/components/ui/ContactCTA.tsx), [HeroHeaderCover.tsx](file:///C:/Users/rohit/Downloads/dating_site/src/components/ui/HeroHeaderCover.tsx), and [ContactForm.tsx](file:///C:/Users/rohit/Downloads/dating_site/src/components/ui/ContactForm.tsx).
- **Outcome**: Completely eliminated code duplication across page views, streamlined layout consistency, and reduced cumulative rendering complexity.

### 4. Efficient Zustand Selectors
- **Approach**: Implemented fine-grained slice selectors to pull state from Zustand stores. Instead of calling `const store = useListingsStore()`, we extract only what is needed:
  ```typescript
  const favorites = useListingsStore(state => state.favorites);
  ```
- **Outcome**: Prevents components from re-rendering unless the specific slice of state they consume changes (e.g. changing theme does not trigger a redraw of the listings store).

### 5. Synchronous Render Computations (Avoiding Effect Cascades)
- **Approach**: Replaced asynchronous `useEffect` hook blocks inside [src/pages/Listings.tsx](file:///C:/Users/rohit/Downloads/dating_site/src/pages/Listings.tsx) with synchronous render-time checks:
  ```typescript
  const activeSelectedPropertyId = selectedPropertyId && filteredListings.some(p => p.id === selectedPropertyId)
    ? selectedPropertyId
    : null;
  ```
- **Outcome**: Eliminates double-pass rendering loops (where a state update within an effect triggers a second render pass), improving frame-rate stability and satisfying modern React rules (`react-hooks/set-state-in-effect`).

### 6. Media Asset Optimization
- **Approach**: Added native `loading="lazy"` tags on all images to defer off-screen asset loading. Image dimensions are capped using custom CDN parameters (`?auto=format&fit=crop&w=800&q=80`) to prevent high-resolution layout shifts.
