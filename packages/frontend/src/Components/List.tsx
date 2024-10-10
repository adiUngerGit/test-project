import React, { useState } from 'react';
import { ItemList, Item as ItemType } from '../store/useItemStore';
import Button from './Button';
import Item from './Item';
import InputComponent from './InputComponent';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

interface ListProps {
  list: ItemList;
  addItem: (listId: number, name: string) => void;
  removeItem: (listId: number, itemId: number) => void;
  removeList: (listId: number) => void;
}

const List: React.FC<ListProps> = ({ list, addItem, removeItem, removeList }) => {
  const [newItemName, setNewItemName] = useState<string>('');

  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      addItem(list.id, newItemName);
      setNewItemName('');


    }
  };

  return (
    <div key={list.id} className="border rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">{list.name}</h3>
       <Button label="Remove List" onClick={() => removeList(list.id)} />
      </div>

      <div >
       <InputComponent type="text" placeholder="Enter item name" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
        <Button type={'short'} label="Add Item" onClick={handleAddItem} />
      </div>

      <ul className="space-y-2">
        {list.items && list.items.length > 0 ? (
          list.items.map((item: ItemType) => (
            <Item
              key={item.id}
              item={item}
              listId={list.id}
              removeItem={removeItem}
            />
          ))
        ) : (
          <p>Add items to your list</p>
        )}
      </ul>
    </div>
  );
};

export default List;
