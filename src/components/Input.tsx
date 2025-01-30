import React from 'react';

interface InputProps {
  type: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  className?: string;
  readOnly?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  min,
  max,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      max={max}
      className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};

export default Input;