import React from 'react';

export interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, primary = false, onClick }) => {
  let className = primary ? 'bg-blue-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded' : 'bg-red-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded';
  className = className+' w-full';
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
