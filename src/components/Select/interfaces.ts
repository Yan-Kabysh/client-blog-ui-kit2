import { Dispatch, SetStateAction } from 'react';

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  placeholder?: string;
  selectedOption: Option | null;
  setSelectedOption: Dispatch<SetStateAction<Option | null>>;
  error?: string;
}
