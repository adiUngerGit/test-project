// store/useItemStore.ts
import { create } from 'zustand';
import axios from 'axios';

export interface Item {
  id: number;
  name: string;
}

export interface ItemList {
  id: number;
  name: string;
  items: Item[];
}

interface ItemStore {
  lists: ItemList[];
  fetchLists: () => Promise<void>;
  addList: (name: string) => Promise<void>;
  addItem: (listId: number, name: string) => Promise<void>;
  removeItem: (listId: number, id: number) => Promise<void>;
  removeList: (listId: number) => Promise<void>;
}

export const useItemStore = create<ItemStore>((set) => ({
  lists: [],
  
  fetchLists: async () => {
    try {
      const response = await axios.get<ItemList[]>('http://localhost:5000/api/lists');
      set({ lists: response.data });
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  },
  
  addList: async (name: string) => {
    try {
      const response = await axios.post<ItemList>('http://localhost:5000/api/lists', { name });
      set((state) => ({ lists: [...state.lists, response.data] })); // Update state correctly with new list
    } catch (error) {
      console.error('Error adding list:', error);
    }
  },
  
  addItem: async (listId: number, name: string) => {
    try {
      const response = await axios.post<Item>(`http://localhost:5000/api/lists/${listId}/items`, { name });
      set((state) => ({
        lists: state.lists.map((list) =>
          list.id === listId ? { ...list, items: [...list.items, response.data] } : list
        ),
      }));
    } catch (error) {
      console.error('Error adding item:', error);
    }
  },
  
  removeItem: async (listId: number, id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/lists/${listId}/items/${id}`);
      set((state) => ({
        lists: state.lists.map((list) =>
          list.id === listId ? { ...list, items: list.items.filter((item) => item.id !== id) } : list
        ),
      }));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  },
  
  removeList: async (listId: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/lists/${listId}`);
      set((state) => ({
        lists: state.lists.filter((list) => list.id !== listId),
      }));
    } catch (error) {
      console.error('Error removing list:', error);
    }
  },
}));
