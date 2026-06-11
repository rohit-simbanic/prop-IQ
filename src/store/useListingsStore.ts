import { create } from 'zustand';
import type { Property } from '../types/property';
import { mockProperties } from './mockProperties';

interface ListingsState {
  properties: Property[];
}

export const useListingsStore = create<ListingsState>(() => ({
  properties: mockProperties,
}));
