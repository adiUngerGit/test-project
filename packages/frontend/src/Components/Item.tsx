import React from 'react';
import { Item as ItemType } from '../store/useItemStore';
import Button from './Button';

interface ItemProps {
  item: ItemType;
  listId: number;
  removeItem: (listId: number, itemId: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, listId, removeItem }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      {item.name}
      <Button type={'none-bg'}
        onClick={() => removeItem(listId, item.id)}
        label="Remove"
      >
       
      </Button>
    </li>
  );
};

export default Item;
