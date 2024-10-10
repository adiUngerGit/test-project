import React, { useState, useEffect } from 'react';
import { useItemStore } from '../store/useItemStore';
import NewListForm from '../Components/NewListForm';
import List from '../Components/List';

const ItemListPage: React.FC = () => {
  const { lists = [], fetchLists, addList, addItem, removeItem, removeList } = useItemStore(); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchData = async () => {
      await fetchLists();
      setLoading(false); 
    };
    fetchData();
  }, [fetchLists]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">Add lists</h2>
        <NewListForm addList={addList} />

        <div className="space-y-6">
          {lists && lists.length > 0 ? (
            lists.map((list) => (
              <List
                key={list.id}
                list={list}
                addItem={addItem}
                removeItem={removeItem}
                removeList={removeList}
              />
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
