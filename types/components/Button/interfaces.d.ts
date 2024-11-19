import { HTMLAttributes } from "react";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    label: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
}
