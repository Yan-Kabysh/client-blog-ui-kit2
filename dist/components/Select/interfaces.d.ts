export interface Option {
  value: string;
  label: string;
}
export interface SelectProps {
  options: Option[];
  placeholder?: string;
  selectedOption: Option | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<Option | null>>;
  error?: string;
}
