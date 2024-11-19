import React from 'react';
import { HeadingProps } from './interfaces';
import './Heading.scss';
declare const Heading: ({ type, children, className }: HeadingProps) => React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export default Heading;
