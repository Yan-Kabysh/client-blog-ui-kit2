import { MessageBoxProps } from './interfaces';
import './index.scss';

const MessageBox = ({
  placeholder,
  value,
  onChange,
  error,
}: MessageBoxProps) => {
  return (
    <div className="message-box-wrapper">
      <textarea
        className="message-box"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="error">{error}</span>
    </div>
  );
};

export default MessageBox;
