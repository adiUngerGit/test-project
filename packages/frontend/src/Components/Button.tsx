import React from 'react';

export interface ButtonProps {
  label: string;
  type?: 'long' | 'short' | 'none-bg';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// Helper function for setting the class based on the type
const styledButton = (type: 'long' | 'short' | 'none-bg' | undefined) => {
  switch (type) {
    case 'long':
      return 'bg-blue-500 hover:bg-blue-600 w-full';
    case 'short':
      return 'bg-green-500 hover:bg-green-600 vertical-center horizontal-center';
    case 'none-bg':
      return 'text-blue-500 hover:text-blue-600';
    default:
      return '';
  }
};

const Button: React.FC<ButtonProps> = ({ label, onClick, type }) => {
  return (
    <button
      className={`font-bold py-2 px-4 rounded ${styledButton(type)}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
