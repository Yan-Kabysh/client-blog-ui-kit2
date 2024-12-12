import { DisplayProps } from './interfaces';
import './index.scss';

const Display = ({ children, className }: DisplayProps) => {
  return <span className={'display ' + className}>{children}</span>;
};

export default Display;
