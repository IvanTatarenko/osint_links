import { create } from 'zustand'

export  const useSiteDorkStore = create((set) => ({
  text: '',
  status: false,
  updateText: (newText: string) => set(() => ({ text: 'inurl:'+newText })),
  toggleStatus: () => set((state: any) => ({ status: !state.status })),
}))


