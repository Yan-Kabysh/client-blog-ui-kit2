import { StoryFn, Meta } from '@storybook/react';
import { JSX } from 'react/jsx-runtime';
import Icon from './Icon'
import { IconProps } from './interfaces';

export default {
  title: 'UI Kit/Icon',
  component: Icon,
} as Meta;

const Template: StoryFn<IconProps> = (args: JSX.IntrinsicAttributes & IconProps) => <Icon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  name: 'Facebook'
};

export const Instagram = Template.bind({});
Instagram.args = {
  name: 'Instagram'
};

export const Linkedin = Template.bind({});
Linkedin.args = {
  name: 'Linkedin'
};

export const Twitter = Template.bind({});
Twitter.args = {
  name: 'Twitter'
};