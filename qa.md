# 🏰 PropIQ Frontend Ownership Q&A

This document contains **60 comprehensive technical interview questions and answers** directly mapped to the PropIQ luxury real estate portal frontend codebase. This list serves as a verification of project ownership, technical design implementation, and system architecture.

---

## 📋 Table of Contents

- [Category 1: Project Setup & Build Configuration (Q1 - Q10)](#category-1-project-setup--build-configuration-q1---q10)
- [Category 2: Routing & Entry (App.tsx & Stores) (Q11 - Q20)](#category-2-routing--entry-apptsx--stores-q11---q20)
- [Category 3: State Management & Listings Data (Q21 - Q30)](#category-3-state-management--listings-data-q21---q30)
- [Category 4: Core UI Component Implementation (Button & Stories) (Q31 - Q40)](#category-4-core-ui-component-implementation-button--stories-q31---q40)
- [Category 5: Modal System & Transitions (Q41 - Q48)](#category-5-modal-system--transitions-q41---q48)
- [Category 6: Contact Forms & Validations (Zod) (Q49 - Q54)](#category-6-contact-forms--validations-zod-q49---q54)
- [Category 7: Styling & Themes (Q55 - Q60)](#category-7-styling--themes-q55---q60)

---

## Category 1: Project Setup & Build Configuration (Q1 - Q10)

### Q1: What versions of React and React-DOM are configured in the project dependency list, and why is this significant for client performance?

**Answer**:
The project runs on **React 19** and **React-DOM 19**.
In [package.json](file:///c:/Users/rohit/Downloads/real-estate-2/package.json#L23-L24), the dependencies are configured as:

```json
"react": "^19.2.6",
"react-dom": "^19.2.6",
```

This is significant because React 19 introduces automated memoization with the React Compiler, native support for Document Metadata (tags like title/meta can be rendered anywhere in component trees), and enhanced concurrent rendering features that reduce main-thread blockage during heavy DOM redraws.

---

### Q2: How are the Vite plugins configured for compiling React JSX and Tailwind CSS v4 stylesheets?

**Answer**:
Vite bundles application files using standard modules. In [vite.config.ts](file:///c:/Users/rohit/Downloads/real-estate-2/vite.config.ts#L14-L15), the plugins are registered as follows:

```ts
export default defineConfig({
  plugins: [react(), tailwindcss()],
```

`react()` from `@vitejs/plugin-react` compiles TSX components into standard JS, and `tailwindcss()` from `@tailwindcss/vite` compiles Tailwind v4 directives directly without requiring a secondary PostCSS configuration.

---

### Q3: Where are the custom theme options (like custom Outfit and Inter fonts) defined inside Tailwind CSS v4?

**Answer**:
Tailwind CSS v4 replaces the separate tailwind.config.js file with CSS `@theme` rules directly inside index.css.
In [index.css](file:///c:/Users/rohit/Downloads/real-estate-2/src/index.css#L4-L6), the typography families are configured using:

```css
@theme {
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Outfit', sans-serif;
```

This binds Outfit to headings (such as `font-display`) and Inter to paragraphs (using `font-sans`).

---

### Q4: What is the specific HSL value set for the main brand accent color (`--color-brand-500`) in the theme?

**Answer**:
In [index.css](file:///c:/Users/rohit/Downloads/real-estate-2/src/index.css#L14), the brand-500 color is assigned to an HSL value representing a primary cobalt-steel blue accent:

```css
--color-brand-500: hsl(211 54% 37%); /* Primary Cobalt/Steel Blue */
```

All components requesting `bg-brand-500` or `text-brand-500` inherit this custom variable color dynamically.

---

### Q5: What npm scripts are configured inside the package manifest to run codebase validation tests, check format issues, and perform production builds?

**Answer**:
In [package.json](file:///c:/Users/rohit/Downloads/real-estate-2/package.json#L6-L16), the workspace exposes the following scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "format:check": "prettier --check \"src/**/*.{ts,tsx,css,json}\"",
  "format:write": "prettier --write \"src/**/*.{ts,tsx,css,json}\"",
```

These execute lint check audits, automated prettier layouts adjustments, and compile optimized bundles.

---

### Q6: How does the local Git workflow enforce quality checks automatically before developer changes are committed?

**Answer**:
The project runs **Husky** hooks on pre-commit and routes staged files into **lint-staged**.
As declared in [package.json](file:///c:/Users/rohit/Downloads/real-estate-2/package.json#L64-L69):

```json
"lint-staged": {
  "src/**/*.{ts,tsx,css,json}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

This forces automatic formatting corrections and lint updates on every file matching the globs before committing.

---

### Q7: Where are Google Fonts imported, and where is the React application mounted on the root DOM?

**Answer**:
Google Fonts are imported at the top of the main style sheets in [index.css](file:///c:/Users/rohit/Downloads/real-estate-2/src/index.css#L1):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap');
```

The application mounts onto a division element inside index.html containing `id="root"`.

---

### Q8: How is the TypeScript project structured to isolate application compilation files from configuration environments?

**Answer**:
The project relies on **TypeScript Project References** to segment workspace configs.
In [tsconfig.json](file:///c:/Users/rohit/Downloads/real-estate-2/tsconfig.json#L1-L10):

```json
"references": [
  { "path": "./tsconfig.node.json" },
  { "path": "./tsconfig.app.json" }
]
```

`tsconfig.app.json` targets the app source directory files under `src/`, whereas `tsconfig.node.json` compiles configuration environments like `vite.config.ts`.

---

### Q9: How are target directory exceptions set up in the ESLint configurations?

**Answer**:
The flat config exports array parameters with global rules.
In [eslint.config.js](file:///c:/Users/rohit/Downloads/real-estate-2/eslint.config.js#L11):

```js
export default defineConfig([globalIgnores(['dist']), {
```

This ignores the distribution build directory (`dist`) to prevent ESLint checking of compiled files.

---

### Q10: How are redirects handled for client-side routing on platforms like Vercel?

**Answer**:
In the root directory, [vercel.json](file:///c:/Users/rohit/Downloads/real-estate-2/vercel.json#L1-L5) overrides default folder mappings to route incoming paths:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This forwards all path lookups back to index.html, allowing the Zustand-based router to resolve routes client-side.

---

## Category 2: Routing & Entry (App.tsx & Stores) (Q11 - Q20)

### Q11: How is route rendering resolved client-side in App.tsx without importing standard react-router packages?

**Answer**:
The application uses a custom Zustand store ([useNavigationStore.ts](file:///c:/Users/rohit/Downloads/real-estate-2/src/store/useNavigationStore.ts)) that tracks the active page name in memory.
In [App.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/App.tsx#L54-L79), the rendering engine displays pages based on a switch-case statement:

```ts
const renderPage = () => {
  switch (activePage) {
    case 'home':
      return <Home />;
    case 'listings':
      return <Listings />;
    case 'about':
      return <About />;
    case 'details':
      return <PropertyDetail />;
    ...
```

---

### Q12: How are path views declared, and how does the Zustand navigation store interface define page values?

**Answer**:
Page route values are restricted to specific union types.
In [useNavigationStore.ts](file:///c:/Users/rohit/Downloads/real-estate-2/src/store/useNavigationStore.ts#L3-L13):

```ts
export type PageId =
  | 'home'
  | 'listings'
  | 'about'
  | 'services'
  | 'details'
  | 'docs'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'cookies';
```

The store exports `activePage: PageId` along with a state update action `navigateTo` to handle page changes.

---

### Q13: How is page-level lazy loading implemented inside the application router?

**Answer**:
Pages are imported dynamically using React `lazy` to split them into separate chunks.
In [App.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/App.tsx#L8-L20), the dynamic loader handles named module conversions:

```ts
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Listings = lazy(() => import('./pages/Listings').then((m) => ({ default: m.Listings })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
```

---

### Q14: How is window navigation scrolling managed during client-side route changes?

**Answer**:
The `navigateTo` method inside the navigation store resets the window scroll position when changing pages.
In [useNavigationStore.ts](file:///c:/Users/rohit/Downloads/real-estate-2/src/store/useNavigationStore.ts#L24-L30):

```ts
navigateTo: (page, propertyId = null) => {
  set({ activePage: page, selectedPropertyId: propertyId });
  // Push simple state to history for back button support if desired
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
},
```

This provides a smooth transition to the top of the viewport on route changes.

---

### Q15: How are transition animations handled between page view swaps?

**Answer**:
The application wraps the dynamic components in Framer Motion’s `<AnimatePresence>` to manage exit and entry animations.
In [App.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/App.tsx#L87-L97):

```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={activePage}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.35, ease: 'easeInOut' }}
  >
    <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
  </motion.div>
</AnimatePresence>
```

The `mode="wait"` directive delays the entry animation of the incoming page until the outgoing page completes its exit animation.

---

### Q16: What fallback interface does the application render while lazy page imports load?

**Answer**:
A custom spinner component, `<PageLoader />`, displays a pulse animation while dynamic imports resolve.
In [App.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/App.tsx#L23-L30):

```tsx
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 bg-white dark:bg-black">
    <Landmark className="text-brand-500 w-12 h-12 animate-pulse" />
    <span className="text-xs font-bold font-display uppercase tracking-widest text-slate-400">
      Loading Luxe Haven...
    </span>
  </div>
);
```

---

### Q17: What conditional styles determine if the header Navbar renders with a transparent background?

**Answer**:
The header displays a transparent background on specific hero pages when the page is at scroll position 0.
In [Navbar.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/layout/Navbar.tsx#L29-L38):

```ts
const isOverlayPage =
  activePage === 'home' ||
  activePage === 'details' ||
  activePage === 'about' ||
  activePage === 'listings';
const showTransparent = isOverlayPage && !isScrolled;

const headerBgClass = showTransparent
  ? 'bg-transparent border-b border-white/20 text-white'
  : 'bg-white/95 dark:bg-black/95 border-b border-black dark:border-white/10 text-slate-900 dark:text-[#f0f2f1] shadow-sm';
```

---

### Q18: How does the desktop header Navbar align navigation selections inside a grid layout?

**Answer**:
The Navbar contains a centered menu column that arranges navigation selections using a 2x2 CSS Grid layout.
In [Navbar.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/layout/Navbar.tsx#L87-L112):

```tsx
<div className="grid grid-cols-2 grid-rows-2 w-full max-w-sm h-full">
  <button
    onClick={() => handleNavClick('home')}
    className={getCellClass('home', 'border-r border-b')}
  >
    Home
  </button>
  <button
    onClick={() => handleNavClick('listings')}
    className={getCellClass('listings', 'border-b')}
  >
    Project
  </button>
  <button onClick={() => handleNavClick('about')} className={getCellClass('about', 'border-r')}>
    About us
  </button>
  <button onClick={() => handleNavClick('services')} className={getCellClass('services', '')}>
    Services
  </button>
</div>
```

---

### Q19: How are the active navigation links dynamically highlighted inside Navbar.tsx?

**Answer**:
The helper method `getCellClass` resolves link styling by checking if the menu item is active.
In [Navbar.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/layout/Navbar.tsx#L46-L69):

```ts
const getCellClass = (pageId: PageId, borderClasses: string) => {
  const isActive = activePage === pageId;
  ...
  const activeClass = showTransparent
    ? 'bg-white text-black font-bold'
    : 'bg-black text-white dark:bg-white dark:text-black font-bold';

  const inactiveClass = showTransparent
    ? 'bg-transparent text-white/90 hover:bg-white/10 hover:text-white'
    : 'bg-transparent text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5';
```

---

### Q20: How are scroll listener subscriptions managed and disposed of during the Navbar component lifecycle?

**Answer**:
The scroll listener monitors viewport scrolling changes and sets the `isScrolled` flag.
In [Navbar.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/layout/Navbar.tsx#L12-L22):

```ts
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

The cleanup callback removes the listener from the `window` object when the component unmounts to prevent memory leaks.

---

## Category 3: State Management & Listings Data (Q21 - Q30)

### Q21: How is the global property listings store defined and initialized using Zustand?

**Answer**:
The listings store manages the collection of properties.
In [useListingsStore.ts](file:///c:/Users/rohit/Downloads/real-estate-2/src/store/useListingsStore.ts#L5-L12):

```ts
interface ListingsState {
  properties: Property[];
}

export const useListingsStore = create<ListingsState>(() => ({
  properties: mockProperties,
}));
```

This setup provides components throughout the application with access to real estate listings state from a single source.

---

### Q22: What structural contract types define real estate listing models in the project types definitions?

**Answer**:
The project defines data structures using TypeScript interfaces in property.ts.
In [property.ts](file:///c:/Users/rohit/Downloads/real-estate-2/src/types/property.ts#L12-L33):

```ts
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: PropertyType;
  status: ListingStatus;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  yearBuilt: number;
  garages: number;
  image: string;
  images: string[];
  featured: boolean;
  lat: number;
  lng: number;
  amenities: string[];
  agent: Agent;
}
```

---

### Q23: How are property types and listing statuses restricted using TypeScript union types?

**Answer**:
The application restricts types to prevent invalid property states.
In [property.ts](file:///c:/Users/rohit/Downloads/real-estate-2/src/types/property.ts#L9-L10):

```ts
export type PropertyType = 'house' | 'apartment' | 'villa' | 'condo' | 'land';
export type ListingStatus = 'sale' | 'rent';
```

---

### Q24: What model parameters represent broker profiles inside the Property data interface?

**Answer**:
Each property includes an agent sub-profile details object.
In [property.ts](file:///c:/Users/rohit/Downloads/real-estate-2/src/types/property.ts#L1-L7):

```ts
export interface Agent {
  name: string;
  role: string;
  phone: string;
  email: string;
  avatar: string;
}
```

---

### Q25: How is property data loaded into the Listings view component without using an asynchronous hook?

**Answer**:
The Listings view accesses the store synchronously during render, reading state from Zustand.
In [Listings.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/pages/Listings.tsx#L9):

```ts
const { properties } = useListingsStore();
```

This approach avoids `useEffect` loading state delays by calculating view variables synchronously from the local cache.

---

### Q26: How does the application implement progressive "Load More" pagination for the Listings catalog?

**Answer**:
The component maintains local limit indices inside useState to slice the array.
In [Listings.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/pages/Listings.tsx#L10-L16):

```ts
const [visibleCount, setVisibleCount] = useState(4);

const handleLoadMore = () => {
  setVisibleCount((prev) => Math.min(prev + 2, properties.length));
};

const hasMore = properties.length > visibleCount;
```

This logic displays up to `visibleCount` elements and renders a "Load More" action button if additional listings exist.

---

### Q27: How are alternating block grid offsets styled dynamically inside Listings.tsx?

**Answer**:
The Listings loop determines index positioning dynamically to toggle styling layouts.
In [Listings.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/pages/Listings.tsx#L34-L63):

```ts
{properties.slice(0, visibleCount).map((property, idx) => {
  const isEven = idx % 2 === 0;
  ...
  return (
    <div key={property.id} className="relative flex flex-col lg:block w-full lg:h-[550px] mb-16 lg:mb-28">
      ...
      <div className={`w-full lg:w-[43%] bg-white dark:bg-[#0c0c0c] ... lg:absolute lg:bottom-0 ${
        isEven ? 'lg:right-0' : 'lg:left-0'
      } z-10 mt-6 lg:mt-0`}`}>
```

---

### Q28: How does the PropertyDetail component resolve the targeted property based on the active selection ID?

**Answer**:
The detail page resolves properties dynamically inside a `useMemo` block.
In [PropertyDetail.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/pages/PropertyDetail.tsx#L24-L26):

```ts
const property = useMemo(() => {
  return properties.find((p) => p.id === selectedPropertyId) || properties[0];
}, [properties, selectedPropertyId]);
```

If the user selects a listing, the page displays its details; otherwise, it defaults to the first available listing.

---

### Q29: How is the price formatted for display in the PropertyDetail view?

**Answer**:
Pricing numbers are formatted using the browser's locale conversion parameters.
In [PropertyDetail.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/pages/PropertyDetail.tsx#L45-L49):

```ts
const displayPrice = useMemo(() => {
  return property.price >= 1000
    ? `$${property.price.toLocaleString('en-US', { minimumFractionDigits: 0 })}`
    : `$${property.price}`;
}, [property.price]);
```

This formats large pricing values with currency symbols and thousand separators.

---

### Q30: How does the Listings view convert raw string types to client-friendly label strings?

**Answer**:
A local mapping helper maps property types to reader-friendly display labels.
In [Listings.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/pages/Listings.tsx#L37-L42):

```ts
const getDisplayType = (type: string) => {
  if (type === 'apartment') return 'Residential';
  if (type === 'house') return 'Houses';
  if (type === 'villa') return 'Villa';
  return type;
};
```

---

## Category 4: Core UI Component Implementation (Button & Stories) (Q31 - Q40)

### Q31: What are the style definitions mapped to button variant options like primary, secondary, and outline?

**Answer**:
Variants are configured using Tailwind CSS classes inside a record map.
In [Button.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.tsx#L19-L30):

```ts
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 shadow-md shadow-brand-500/10 active:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600',
  secondary:
    'bg-slate-900 text-white hover:bg-slate-800 dark:bg-[#1f2421] dark:hover:bg-[#2f3531] border border-slate-800 dark:border-white/5 shadow-sm',
  outline:
    'bg-transparent border border-slate-200 text-slate-800 hover:bg-slate-50 dark:border-white/10 dark:text-[#f0f2f1] dark:hover:bg-white/5',
  ...
```

---

### Q32: What size style definitions map to button inputs?

**Answer**:
Button sizing rules configure layout padding, font weight, and element rounding.
In [Button.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.tsx#L32-L36):

```ts
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg font-medium gap-1.5',
  md: 'px-5 py-2.5 text-base rounded-xl font-medium gap-2',
  lg: 'px-7 py-3.5 text-lg rounded-2xl font-semibold gap-2.5',
};
```

---

### Q33: How does the Button component merge variant style options with custom classes?

**Answer**:
The Button component dynamically combines classes using `twMerge` and `clsx`.
In [Button.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.tsx#L59-L66):

```ts
className={twMerge(
  clsx(
    'inline-flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-sans select-none',
    variantStyles[variant],
    sizeStyles[size],
    className
  )
)}
```

This overrides base component styles with custom values provided in `className` without style conflicts.

---

### Q34: What JSX structures build the loading spinner inside the Button component?

**Answer**:
The loading layout uses an animated SVG when the `isLoading` flag is true.
In [Button.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.tsx#L69-L90):

```tsx
{
  isLoading && (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="..." />
    </svg>
  );
}
```

---

### Q35: How does the Button component forward DOM references to parent layouts?

**Answer**:
The component wraps the input callback inside React's `forwardRef` API.
In [Button.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.tsx#L38-L52):

```ts
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
```

---

### Q36: How does the Button component define tap and hover animations using Framer Motion?

**Answer**:
The underlying button element uses Framer Motion attributes to apply animations when hovered or tapped.
In [Button.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.tsx#L54-L58):

```tsx
<motion.button
  ref={ref}
  whileHover={disabled || isLoading ? undefined : { scale: 1.02 }}
  whileTap={disabled || isLoading ? undefined : { scale: 0.98 }}
```

Hovering increases the element size to `1.02` scale, and clicking scales the element down to `0.98`.

---

### Q37: How is the Storybook controls metadata for the Button component configured?

**Answer**:
The story manifest configures select dropdowns and control switches for the component.
In [Button.stories.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.stories.tsx#L4-L23):

```ts
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'danger'],
    },
```

---

### Q38: What properties configure the Button component's loading state Storybook story?

**Answer**:
The loading story registers the loading flag in the component arguments.
In [Button.stories.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.stories.tsx#L56-L62):

```ts
export const Loading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    children: 'Loading...',
  },
};
```

---

### Q39: Why is Button.displayName explicitly defined at the end of the file?

**Answer**:
In [Button.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.tsx#L99):

```ts
Button.displayName = 'Button';
```

When wrapping components with React's `forwardRef` API, build engines can drop component naming details, which can obscure components in developer tools. Explicitly defining `displayName` resolves this issue.

---

### Q40: How does the Button component prevent interaction when disabled or loading?

**Answer**:
The component updates the disabled attribute and ignores click events during loading states.
In [Button.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Button.tsx#L58):

```ts
disabled={disabled || isLoading}
```

This prevents users from triggering multiple submit requests on forms that are in-flight.

---

## Category 5: Modal System & Transitions (Q41 - Q48)

### Q41: What interface settings configure the Modal component?

**Answer**:
The Modal component accepts options via the `ModalProps` interface.
In [Modal.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Modal.tsx#L7-L14):

```ts
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
  className?: string;
}
```

---

### Q42: How does the Modal component handle Escape keypress events during its lifecycle?

**Answer**:
A listener inside a `useEffect` hook captures the Escape keypress to close the modal.
In [Modal.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Modal.tsx#L33-L47):

```ts
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };

  if (isOpen) {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
  }

  return () => {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [isOpen, onClose]);
```

---

### Q43: How does the Modal prevent background layout scroll when open, and clean up the body style afterwards?

**Answer**:
When the modal opens, the effect callback sets the body style overflow to `hidden`:

```ts
document.body.style.overflow = 'hidden';
```

When the modal closes or unmounts, the clean-up return block restores scrolling by resetting the body overflow value:

```ts
return () => {
  document.body.style.overflow = '';
  ...
```

This resets the default scroll behavior on the parent body element.

---

### Q44: What properties define the Modal window entrance and exit animations?

**Answer**:
The Modal panel uses custom spring variables to animate scaling, opacity, and vertical translation.
In [Modal.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Modal.tsx#L63-L67):

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95, y: 16 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.95, y: 16 }}
  transition={{ type: 'spring', damping: 25, stiffness: 350 }}
```

---

### Q45: How is the backdrop overlay structured to close the Modal when clicked?

**Answer**:
A full-screen backdrop overlay division elements registers the click event handler.
In [Modal.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Modal.tsx#L54-L60):

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={onClose}
  className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm cursor-pointer"
/>
```

Clicking the backdrop triggers the parent `onClose` callback to close the modal.

---

### Q46: What style options map to size specifications like sm, md, and lg?

**Answer**:
The modal width is set dynamically using a style mapping record.
In [Modal.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Modal.tsx#L16-L22):

```ts
const sizeStyles: Record<'sm' | 'md' | 'lg' | 'xl' | 'full', string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-full h-full rounded-none',
};
```

---

### Q47: How does the interactive wrapper handle open state transitions inside the Modal stories?

**Answer**:
The Storybook file uses a wrapper component, `ModalInteractiveWrapper`, to manage open and closed states dynamically.
In [Modal.stories.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Modal.stories.tsx#L15-L27):

```tsx
const ModalInteractiveWrapper = (
  args: Omit<React.ComponentProps<typeof Modal>, 'isOpen' | 'onClose'>
) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal Dialog
      </Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
```

---

### Q48: How is the close icon button styled and configured inside the modal header?

**Answer**:
The close button uses an icon and includes utility styling classes.
In [Modal.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/Modal.tsx#L85-L91):

```tsx
<button
  onClick={onClose}
  className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 rounded-lg p-1.5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
  aria-label="Close dialog"
>
  <X size={18} />
</button>
```

The button uses `aria-label="Close dialog"` to ensure accessibility.

---

## Category 6: Contact Forms & Validations (Zod) (Q49 - Q54)

### Q49: What properties and validation rules define the contact schema inside ContactForm.tsx using Zod?

**Answer**:
The validation rules are configured using Zod schemas.
In [ContactForm.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/ContactForm.tsx#L9-L14):

```ts
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
```

---

### Q50: How is the typescript contact form data structure derived from the Zod validation schema?

**Answer**:
TypeScript types are generated directly from the schema layout using Zod’s `infer` method.
In [ContactForm.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/ContactForm.tsx#L16):

```ts
type ContactFormData = z.infer<typeof contactSchema>;
```

This ensures form submit handlers compile with typing rules synced to the schema definitions.

---

### Q51: How is react-hook-form initialized with the Zod validation schema resolver?

**Answer**:
The form initialization binds the `zodResolver` plugin to hook validations.
In [ContactForm.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/ContactForm.tsx#L39-L49):

```ts
const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
} = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
  defaultValues: {
    message: defaultMessage,
  },
});
```

---

### Q52: How are inputs registered in react-hook-form inside ContactForm.tsx?

**Answer**:
Input elements register with hooks using the destructured `register` callback parameters.
In [ContactForm.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/ContactForm.tsx#L76-L77):

```tsx
<input
  type="text"
  placeholder="Full Name"
  {...register('name')}
  className={`w-full ${inputBgClass} ...`}
/>
```

This binds name validation rules, change handlers, and inputs to state variables.

---

### Q53: What simulated delay occurs when a user submits a valid contact form inquiry?

**Answer**:
The submit handler simulates an API call delay using a timeout promise before displaying the success state.
In [ContactForm.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/ContactForm.tsx#L51-L59):

```ts
const onSubmit = useCallback(
  async (data: ContactFormData) => {
    console.log('Inquiry submitted:', data);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSuccessOpen(true);
    reset();
  },
  [reset]
);
```

On submission, the form displays a success dialog and resets the input fields.

---

### Q54: How are inline error messages rendered for invalid input values?

**Answer**:
Validation errors render dynamically beneath their corresponding input elements.
In [ContactForm.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/components/ui/ContactForm.tsx#L79-L81):

```tsx
{
  errors.name && <p className="text-[10px] text-red-500 font-medium">{errors.name.message}</p>;
}
```

The error messages display inline when validation checks fail.

---

## Category 7: Styling & Themes (Q55 - Q60)

### Q55: How does the application detect and sync light/dark themes with the system preference in App.tsx?

**Answer**:
An effect hook uses `window.matchMedia` to monitor light/dark color preferences.
In [App.tsx](file:///c:/Users/rohit/Downloads/real-estate-2/src/App.tsx#L35-L52):

```ts
useEffect(() => {
  // Detect system preferred color scheme and apply it to document root
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Set initial state
  handleThemeChange(mediaQuery);

  // Watch for system color scheme changes dynamically
  mediaQuery.addEventListener('change', handleThemeChange);
  return () => mediaQuery.removeEventListener('change', handleThemeChange);
}, []);
```

This dynamically toggles the dark theme on the document root when system settings change.

---

### Q56: How is the custom glassmorphism styling configured in CSS?

**Answer**:
The styles apply transparency overlays, backdrop filters, and subtle borders.
In [index.css](file:///c:/Users/rohit/Downloads/real-estate-2/src/index.css#L82-L94):

```css
.glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.dark .glass {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

---

### Q57: How are the keyframes configured for the infinite marquee animation in CSS?

**Answer**:
The marquee animations shift coordinates to scroll content infinitely.
In [index.css](file:///c:/Users/rohit/Downloads/real-estate-2/src/index.css#L48-L64):

```css
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
```

Moving elements up to `-50%` of their width creates a seamless loop when content is duplicated in the layout.

---

### Q58: How does the application customize webkit scrollbars?

**Answer**:
The application applies custom styles to scrollbar pseudo-elements in index.css.
In [index.css](file:///c:/Users/rohit/Downloads/real-estate-2/src/index.css#L97-L108):

```css
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-slate-100 dark:bg-neutral-900;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-300 dark:bg-neutral-700 rounded-full hover:bg-slate-400 dark:hover:bg-neutral-600;
}
```

---

### Q59: How does the application invert Leaflet map tiles for dark mode integration?

**Answer**:
A CSS filter rule inverts coordinates dynamically inside dark theme blocks.
In [index.css](file:///c:/Users/rohit/Downloads/real-estate-2/src/index.css#L120-L122):

```css
.dark .leaflet-tile-pane {
  filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
}
```

This CSS rule adjusts standard map tiles to integrate cleanly with dark themes.

---

### Q60: How is the fade-out effect configured on the edges of the marquee scrolling ticker?

**Answer**:
The scrolling marquee uses a CSS masking utility with gradients.
In [index.css](file:///c:/Users/rohit/Downloads/real-estate-2/src/index.css#L151-L154):

```css
.mask-marquee {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}
```

This applies transparency gradients on the left and right edges to create a fade-out visual effect.
