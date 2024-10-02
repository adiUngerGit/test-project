// store/useShoppingStore.ts
import { create } from 'zustand';
import axios from 'axios';

export interface ShoppingItem {
  id: number;
  name: string;
}

interface ShoppingStore {
  items: ShoppingItem[];
  fetchItems: () => Promise<void>;
  addItem: (name: string) => Promise<void>;
  removeItem: (id: number) => Promise<void>;
}

export const useShoppingStore = create<ShoppingStore>((set) => ({
  items: [],
  fetchItems: async () => {
    try {
      const response = await axios.get<ShoppingItem[]>('http://localhost:5000/api/items');
      set({ items: response.data });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  },
  addItem: async (name: string) => {
    try {
      const response = await axios.post<ShoppingItem>('http://localhost:5000/api/items', { name });
      set((state) => ({ items: [...state.items, response.data] }));
    } catch (error) {
      console.error('Error adding item:', error);
    }
  },
  removeItem: async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  },
}));
