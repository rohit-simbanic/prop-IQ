# 🏰 PropIQ - Luxury Real Estate Portal

PropIQ is a premium, state-of-the-art real estate web application featuring modern brutalist glassmorphism, responsive split-pane layouts, interactive geospatial mapping, and automatic system-level **Light & Dark theme** sync.

Built to industry-level standards, the project utilizes **React 19**, **TypeScript**, **Vite**, **Zustand**, and the new **Tailwind CSS v4** styling framework.

---

## 🎨 Design Reference

This project is built from the ground up based on the following Figma design system:
- **Figma Design Link**: [Real Estate Design System (Light & Dark Theme)](https://www.figma.com/design/KdlJApePDEHFVD4Xd3NnLa/Real-Estate-Website-Design-%7C-Light-theme-%7C-Dark-theme--Community-?node-id=0-1&t=DDT2GQzJUmuWNEVb-0)

---

## 🛠️ Technology Stack

- **Core Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4 (native `@theme` configurations), `clsx`, `tailwind-merge`
- **Global State Management**: Zustand
- **Animations**: Framer Motion (page transitions, hover/tap micro-interactions)
- **Sliders**: Swiper.js (thumbnails, swipe transitions)
- **Icons**: Lucide React
- **Forms & Validation**: react-hook-form, zod, `@hookform/resolvers`
- **Maps**: Leaflet, react-leaflet (featuring custom div-icon HTML price tag markers)
- **Component Documentation**: Storybook v8 (`@storybook/react-vite`)
- **Code Quality**: ESLint, Prettier, Husky (pre-commit hooks), lint-staged

---

## 📁 Key Folder Structure

```text
prop-iq/
├── .husky/                  # Git pre-commit hook scripts
├── .storybook/              # Storybook v8 configuration (main.ts, preview.tsx)
├── src/
│   ├── assets/              # Static logo and graphics assets
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   └── ui/              # Button, Modal & stories
│   ├── pages/               # Home, Listings, About, Details, Services views
│   ├── store/               # Zustand stores (listings, navigation)
│   ├── types/               # Type contracts (property, agent)
│   ├── index.css            # Tailwind import & theme variables
│   └── App.tsx              # Page router shell with lazy-loading & suspense
├── DOCUMENTATION.md         # Detailed architectural documentation
└── README.md                # Project startup & overview (this file)
```

---

## 🚀 Quick Start & Installation

To run the application locally, clone or navigate to this folder and execute the following:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Launch Storybook Component Docs
npm run storybook
```

---

## 🎯 Code Quality & Production Build

Verify styling standards, format syntax, and compile production assets:

```bash
# Check formatting
npm run format:check

# Format files
npm run format:write

# Run ESLint audits
npm run lint

# Compile minified production bundles
npm run build
```

---

## 🚀 CI/CD & Vercel Deployment

The project has a pre-configured routing file (`vercel.json`) and a GitHub Actions CD deployment pipeline (`.github/workflows/deploy.yml`).

To enable automated CD deployments on push to `master`:
1. Connect your repository to Vercel.
2. Define the following secrets in GitHub **Settings > Secrets and Variables > Actions**:
   - `VERCEL_TOKEN`: Your Vercel Personal Access Token.
   - `VERCEL_ORG_ID`: Your Vercel Organization ID.
   - `VERCEL_PROJECT_ID`: Your Vercel Project ID.

---

## ⚡ Applied Performance Optimizations

1. **Page Lazy-Loading**: Code-splits pages using `React.lazy()` to reduce initial load weight. Main bundle size was optimized from **706 kB to 376 kB**.
2. **Geospatial Chunk Separation**: Code-splits Leaflet and Map components into a dedicated async chunk loaded only onlistings and details pages.
3. **Component Reuse**: Centralized repetitive layout items into reusable `<ContactCTA />`, `<HeroHeaderCover />`, and `<ContactForm />` components to eliminate duplicate code.
4. **Zustand Selectors**: Selective state hooks prevent unrelated state updates from triggering component redraws.
5. **No Double-Pass Renders**: Replaced asynchronous `useEffect` hook blocks with synchronous render computations to guarantee layout stability.

---

## 🎨 Design System & Accessibility

- **System Theme Sync**: Listens to the system preference media query (`(prefers-color-scheme: dark)`) in `App.tsx` and dynamically applies/removes the `dark` class on the root HTML node.
- **Light Mode**: Clean warm cream/off-white background (`#fcfcf9`) with deep slate text (`#1e293b`) and bronze highlights (`#b45309`).
- **Dark Mode**: Sleek obsidian background (`#0b0d0c`) with high-contrast off-white text (`#f0f2f1`) and silver/gold accents.
- **Typography**: Outfit font for display titles, and Inter for highly readable body paragraphs.
- **Mobile Responsiveness**: Adaptive media queries, flex grids, and full-screen drawers ensure a premium touch interface from 320px screens up to 1440px+ displays.
