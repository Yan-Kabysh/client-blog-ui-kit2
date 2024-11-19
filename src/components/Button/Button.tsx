"use client";


import   './Button.scss';
import { ButtonProps } from './interfaces';

const Button = ({
  onClick,
  label,
  variant = 'primary', 
  size = 'medium',      
}: ButtonProps) => {
  return (
    <button
      className={`button ${variant} ${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button