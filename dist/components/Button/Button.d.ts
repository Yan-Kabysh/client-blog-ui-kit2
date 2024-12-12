import './Button.scss';
import { ButtonProps } from './interfaces';
declare const Button: ({
  onClick,
  label,
  variant,
  size,
  title,
  disabled,
}: ButtonProps) => import('react/jsx-runtime').JSX.Element;
export default Button;
