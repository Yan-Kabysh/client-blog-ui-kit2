import { StoryFn, Meta } from '@storybook/react';
import Header from '.';
import { HeaderProps, LanguageProps } from './interfaces';

export default {
  title: 'UI Kit/Header',
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps & LanguageProps> = (args) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Modsen Client Blog',
  links: {
    Home: '',
    Blog: '',
    'About Us': '',
    'Contact us': '',
  },
  btnLabel: 'Subscribe',
  btnClick: () => alert('click'),
  logoClick: () => alert('logo click'),
  languages: ['en', 'fr', 'es', 'de'],
  selectedLanguage: 'en',
  onLanguageChange: (lang: string) => alert(`Language changed to ${lang}`),
};
