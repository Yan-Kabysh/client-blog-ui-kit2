import { ChangeEvent } from 'react';

export interface FooterProps {
  title: string;
  links: Record<string, string>;
  btnLabel: string;
  mainText: string;
  btnClick: () => void;
  email: string;
  address: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}
