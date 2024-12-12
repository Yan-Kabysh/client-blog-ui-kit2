import { icons } from './config';
import { IconProps } from './interfaces';
import './index.scss';

const Icon = ({ name, fill = 'currentColor', link }: IconProps) => {
  const IconComponent = icons[name];
  return (
    <a
      className="iconLink"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconComponent fill={fill} />
    </a>
  );
};
export default Icon;
