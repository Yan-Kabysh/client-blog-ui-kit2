import { icons } from './config';
import { FooterProps } from './interfaces';
import './index.scss';
import Heading from '@components/Heading';
import Button from '@components/Button';
import Body from '@components/Body';
import Icon from '@components/Icon';

const Footer = ({
  title,
  links,
  mainText,
  error,
  btnLabel,
  btnClick,
  email,
  address,
  placeholder,
  value,
  onChange,
}: FooterProps) => {
  return (
    <div className="footer-wrapper">
      <div className="footer-header">
        <Heading className="title" type="h4">
          {title}
        </Heading>
        <div className="links">
          {Object.entries(links).map(([title, url]) => (
            <a className="link-item" key={url} href={url}>
              {title}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-main">
        <Heading className="footer-main-text" type="h2">
          {mainText}
        </Heading>
        <div className="email-block">
          <div className="email-block-main">
            <input
              value={value}
              onChange={onChange}
              className="footer-input"
              type="email"
              placeholder={placeholder}
            />
            <span className="error">{error}</span>
          </div>
          <Button title={btnLabel} label={btnLabel} onClick={btnClick} />
        </div>
      </div>
      <div className="footer-footer">
        <div className="contact">
          <Body type={1}>{address}</Body>
          <Body type={1}>{email}</Body>
        </div>
        <div className="icons">
          {icons.map((icon) => (
            <Icon key={icon.name} name={icon.name} link={icon.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
