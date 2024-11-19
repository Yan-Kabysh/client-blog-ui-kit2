import { StoryFn, Meta } from '@storybook/react';
import Header from './Header'
import { HeaderProps } from './interfaces';

export default {
  title: 'UI Kit/Header',
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Modsen Client Blog',
  links : {
    'Home': '',
    'Blog': '',
    'About Us': '',
    'Contact us': ''
  },
  btnLabel: 'Subscribe',
  btnClick: () => alert('click')
};
