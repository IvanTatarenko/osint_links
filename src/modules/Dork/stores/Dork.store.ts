import { create } from 'zustand'

interface DorkStoreState {
  searchWithDork: string;
  siteText: string;
  siteStatus: boolean;
  titleText: string;
  titleStatus: boolean;
}

interface DorkStoreActions {
  updateSearchWithDork: (newText: string) => void;
  updateSiteText: (newText: string) => void;
  toggleSiteStatus: () => void;
  updateTitleText: (newText: string) => void;
  toggleTitleStatus: () => void;
}

export type DorkStore = DorkStoreState & DorkStoreActions;

export const useDorkStore = create<DorkStore>((set) => ({
  // Всі дорки разом
  searchWithDork: '',
  updateSearchWithDork: (newText: string) => set(() => ({ searchWithDork: newText })),
  // Дорк сайту
  siteText: '',
  siteStatus: false,
  updateSiteText: (newText: string) => set(() => ({ siteText: 'inurl:'+newText })),
  toggleSiteStatus: () => set((state) => ({ siteStatus: !state.siteStatus })),
  // Дорк Title
  titleText: '',
  titleStatus: false,
  updateTitleText: (newText: string) => set(() => ({ titleText: 'intitle:'+newText })),
  toggleTitleStatus: () => set((state) => ({ titleStatus: !state.titleStatus })),
}));


