import { LabelProps } from './interfaces';
import './index.scss';

const Label = ({ children }: LabelProps) => {
  return <span className="label">{children}</span>;
};

export default Label;
