import { InputProps } from './interfaces';
import './index.scss';

const Input = ({
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
}: InputProps) => {
  return (
    <div className="input-wrapper">
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="error">{error}</span>
    </div>
  );
};

export default Input;
