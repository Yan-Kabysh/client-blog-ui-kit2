import { HeadingProps } from './interfaces';
import './index.scss';
import { createElement } from 'react';

const Heading = ({ type, children, className = '', onClick }: HeadingProps) => {
  const headingClass = type;

  return createElement(
    type,
    { className: `${headingClass} ${className}`, onClick },
    children,
  );
};

export default Heading;
