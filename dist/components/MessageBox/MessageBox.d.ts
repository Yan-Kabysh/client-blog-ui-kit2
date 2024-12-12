import { MessageBoxProps } from './interfaces';
import './MessageBox.scss';
declare const MessageBox: ({
  placeholder,
  value,
  onChange,
  error,
}: MessageBoxProps) => import('react/jsx-runtime').JSX.Element;
export default MessageBox;
