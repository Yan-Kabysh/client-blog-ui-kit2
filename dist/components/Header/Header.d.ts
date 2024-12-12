import { HeaderProps, LanguageProps } from './interfaces';
import './Header.scss';
declare const Header: ({
  title,
  links,
  btnLabel,
  btnClick,
  logoClick,
  languages,
  selectedLanguage,
  onLanguageChange,
}: HeaderProps & LanguageProps) => import('react/jsx-runtime').JSX.Element;
export default Header;
