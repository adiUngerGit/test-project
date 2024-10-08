// components/ItemListPage.tsx
import React, { useState, useEffect } from 'react';
import { useItemStore, Item, ItemList } from '../store/useItemStore';
import Button from '../Components/Button';

const ItemListPage: React.FC = () => {
  const [newListName, setNewListName] = useState<string>(''); // New list name
  const [newItem, setNewItem] = useState<{ [key: number]: string }>({}); // New item for each list
  const { lists = [], fetchLists, addList, addItem, removeItem, removeList } = useItemStore(); // Initialize lists as an empty array by default
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      await fetchLists();
      setLoading(false); // Set loading to false after fetching lists
    };

    fetchData();
  }, [fetchLists]);

  // Handle adding a new list
  const handleAddList = async () => {
    if (newListName.trim() !== '') {
      await addList(newListName); // Ensure list is added before clearing input
      setNewListName(''); // Clear the input field
    }
  };

  // Handle adding a new item to a specific list
  const handleAddItem = (listId: number) => {
    if (newItem[listId]?.trim() !== '') {
      addItem(listId, newItem[listId]);
      setNewItem({ ...newItem, [listId]: '' }); // Clear input for that list
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">Manage Your Item Lists</h2>

        {/* Section to add a new list */}
        <div className="mb-6">
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a new list name"
          />
          <Button primary={true} label="Add List" onClick={handleAddList} />
        </div>

        {/* Render each list */}
        <div className="space-y-6">
          {lists && lists.length > 0 ? ( // Ensure lists is defined and has content
            lists.map((list: ItemList) => (
              <div key={list.id} className="border rounded-lg p-4 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">{list.name}</h3>
                  <button
                    onClick={() => removeList(list.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove List
                  </button>
                </div>

                {/* Section to add a new item to the list */}
                <div className="flex mb-4">
                  <input
                    type="text"
                    value={newItem[list.id] || ''}
                    onChange={(e) =>
                      setNewItem({ ...newItem, [list.id]: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Add an item to ${list.name}`}
                  />
                  <Button primary={true} label="Add Item" onClick={() => handleAddItem(list.id)} />
                </div>

                {/* Render items in the list */}
                <ul className="space-y-2">
                  {list.items.map((item: Item) => (
                    <li key={item.id} className="flex justify-between items-center p-2 border-b">
                      {item.name}
                      <button
                        onClick={() => removeItem(list.id, item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove Item
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No lists available. Please add a new list!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListPage;
