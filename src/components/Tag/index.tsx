import { ChangeEvent } from 'react';
import { TagProps } from './interfaces';
import './index.scss';
const Tag = ({ children, onChange, checked }: TagProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };
  return (
    <label className={`tag ${checked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        className="tag-checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <span className="tag-content">{children}</span>
    </label>
  );
};

export default Tag;
