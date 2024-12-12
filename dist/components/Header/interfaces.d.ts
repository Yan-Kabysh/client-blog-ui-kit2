export interface HeaderProps {
  title: string;
  links: Record<string, string>;
  btnLabel: string;
  btnClick: () => void;
  logoClick: () => void;
}
export interface LanguageProps {
  languages: string[];
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}
