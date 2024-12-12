import { StoryFn, Meta } from '@storybook/react';
import Cap from '.';
import { CapProps } from './interfaces';

export default {
  title: 'UI Kit/Cap',
  component: Cap,
} as Meta;

const Template: StoryFn<CapProps> = (args) => <Cap {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Cap text primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 2,
  children: 'Cap text secodary',
};
