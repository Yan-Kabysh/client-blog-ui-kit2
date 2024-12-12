import { StoryFn, Meta } from '@storybook/react';
import Display from '.';
import { DisplayProps } from './interfaces';

export default {
  title: 'UI Kit/Display',
  component: Display,
} as Meta;

const Template: StoryFn<DisplayProps> = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Display text',
  className: '',
};
