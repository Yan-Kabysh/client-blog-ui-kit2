export interface HeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: string;
  className?: string;
  onClick?: () => void;
}
