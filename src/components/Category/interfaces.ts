import { ReactNode } from 'react';

export interface CategoryProps {
  icon: ReactNode;
  title: string;
  text?: string;
  type?: 'primary' | 'secondary';
  onClick: () => void;
  className?: string;
}
