import { useState } from 'react';

import { HeaderProps, LanguageProps } from './interfaces';
import './index.scss';
import Heading from '@components/Heading';
import Button from '@components/Button';
import useBodyScrollLock from '@hooks/useBodyScrollLock';

const Header = ({
  title,
  links,
  btnLabel,
  btnClick,
  logoClick,
  languages,
  selectedLanguage,
  onLanguageChange,
}: HeaderProps & LanguageProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useBodyScrollLock(isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const btnMenuClick = () => {
    setIsMenuOpen(false);
    btnClick();
  };

  return (
    <div className="header-wrapper">
      <Heading onClick={logoClick} className="title" type="h4">
        {title}
      </Heading>

      <div className="links">
        {Object.entries(links).map(([linkTitle, url]) => (
          <a className="link-item" key={url} href={url}>
            {linkTitle}
          </a>
        ))}
        <Button
          title={btnLabel}
          variant="secondary"
          label={btnLabel}
          onClick={btnClick}
        />

        <div className="language-selector">
          <select
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>

      <div className={`fullscreen-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          {Object.entries(links).map(([linkTitle, url]) => (
            <a className="link-item" key={url} href={url} onClick={toggleMenu}>
              {linkTitle}
            </a>
          ))}
          <div className="language-selector">
            <select
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <Button
            title={btnLabel}
            variant="secondary"
            label={btnLabel}
            onClick={btnMenuClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
