import React from 'react';

export interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, primary = false, onClick }) => {
  const className = primary
    ? 'bg-blue-500 text-white font-bold py-2 px-4 rounded'
    : 'bg-gray-300 text-black font-bold py-2 px-4 rounded';

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
