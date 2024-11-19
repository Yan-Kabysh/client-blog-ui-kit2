import { FC, ReactNode } from 'react';
import './Accordion.scss';
export interface AccordionProps {
    isOpen?: boolean;
    onToggle?: () => void;
    children: ReactNode;
    title: string;
    innerControl?: boolean;
}
declare const Accordion: FC<AccordionProps>;
export default Accordion;
