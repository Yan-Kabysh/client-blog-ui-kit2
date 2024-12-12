import './index.scss';
import { CapProps } from './interfaces';

const Cap = ({ children, type = 1, className = '' }: CapProps) => {
  return (
    <span className={`cap${type} ${className}`}>{children.toUpperCase()}</span>
  );
};

export default Cap;
