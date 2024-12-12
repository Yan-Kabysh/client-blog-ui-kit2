import { ChangeEvent } from 'react';

export interface MessageBoxProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}
