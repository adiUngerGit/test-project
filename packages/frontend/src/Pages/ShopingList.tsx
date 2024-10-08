// components/ShoppingList.tsx
import React, { useState, useEffect } from 'react';
import { useShoppingStore, ShoppingItem } from '../store/useShoppingStore';
import Button from '../Components/Button';

const ShoppingList: React.FC = () => {
  const [newItem, setNewItem] = useState<string>('');
  const { items, fetchItems, addItem, removeItem } = useShoppingStore();

  useEffect(() => {
    fetchItems(); // Fetch items on mount
  }, [fetchItems]);

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      addItem(newItem);
      setNewItem(''); // Clear input after adding
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Shopping List</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item name"
          />
          
            <Button primary={true} label="Add Item" onClick={handleAddItem}/>
        </div>

        <ul className="space-y-2">
          {items.map((item: ShoppingItem) => (
            <li key={item.id} className="flex justify-between items-center p-2 border-b">
              {item.name}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
