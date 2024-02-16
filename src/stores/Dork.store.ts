import { create } from 'zustand'

export  const useDorkStore = create((set) => ({
  searchWithDork: '',
  updateText: (newText: string) => set(() => ({ searchWithDork: newText })),
}))


