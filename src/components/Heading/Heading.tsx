"use client";
import React from 'react';
import { HeadingProps } from './interfaces';
import './Heading.scss'


const Heading = ({ type, children, className = '' }: HeadingProps) => {
  const headingClass = type;

  return React.createElement(
    type, 
    { className: `${headingClass} ${className}` },
    children
  );
};

export default Heading;
