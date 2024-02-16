import { create } from 'zustand'

export const useTitleDorkStore = create((set) => ({
  text: '',
  status: false,
  updateText: (newText: string) => set(() => ({ text: 'intitle:'+newText })),
  toggleStatus: () => set((state: any) => ({ status: !state.status })),
}))


