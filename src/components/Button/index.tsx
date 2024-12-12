import './index.scss';
import { ButtonProps } from './interfaces';

const Button = ({
  onClick,
  label,
  variant = 'primary',
  size = 'medium',
  title,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`button ${variant} ${size}`}
      onClick={onClick}
      title={title}
    >
      {label}
    </button>
  );
};

export default Button;
