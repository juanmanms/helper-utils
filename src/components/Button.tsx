import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, title }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;