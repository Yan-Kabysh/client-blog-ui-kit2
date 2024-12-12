import { useState } from 'react';
import { SelectProps, Option } from './interfaces';
import './index.scss';

const Select = ({
  options,
  placeholder = 'Select an option',
  selectedOption,
  setSelectedOption,
  error,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="custom-selector">
        <div
          className={`custom-selector-header ${isOpen ? 'open' : ''}`}
          onClick={handleToggle}
        >
          <span>{selectedOption?.label || placeholder}</span>
          <div className={`arrow ${isOpen ? 'rotate' : ''}`} />
        </div>
        {isOpen && (
          <ul className="custom-selector-options">
            {options.map((option) => (
              <li
                key={option.value}
                className="custom-selector-option"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <span className="error">{error}</span>
    </div>
  );
};

export default Select;
