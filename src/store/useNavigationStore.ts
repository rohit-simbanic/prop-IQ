import { create } from 'zustand';

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

interface NavigationState {
  activePage: PageId;
  selectedPropertyId: string | null;
  navigateTo: (page: PageId, propertyId?: string | null) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activePage: 'home',
  selectedPropertyId: null,
  navigateTo: (page, propertyId = null) => {
    set({ activePage: page, selectedPropertyId: propertyId });
    // Push simple state to history for back button support if desired
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
}));
