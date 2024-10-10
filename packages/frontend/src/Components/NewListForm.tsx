import React, { useState } from 'react';
import Button from './Button';
import InputComponent from './InputComponent';

interface NewListFormProps {
  addList: (name: string) => void;
}

const NewListForm: React.FC<NewListFormProps> = ({ addList }) => {
  const [newListName, setNewListName] = useState<string>('');

  const handleAddList = () => {
    if (newListName.trim() !== '') {
      addList(newListName);
      setNewListName('');
    }
  };

  return (
    <div className="mb-4 p-2">
      <InputComponent
        type="text"
        placeholder="Enter list name"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
      />
      <Button type={'long'} label="Add List" onClick={handleAddList} />
    </div>
  );
};

export default NewListForm;
