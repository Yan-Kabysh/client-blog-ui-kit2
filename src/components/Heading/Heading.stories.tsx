import { StoryFn, Meta } from '@storybook/react';
import Heading from '.';
import { HeadingProps } from './interfaces';

export default {
  title: 'UI Kit/Heading',
  component: Heading,
} as Meta;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
  type: 'h1',
  children: 'H1 heading',
};

export const H2 = Template.bind({});
H2.args = {
  type: 'h2',
  children: 'H2 heading',
};
export const H3 = Template.bind({});
H3.args = {
  type: 'h3',
  children: 'H3 heading',
};
export const H4 = Template.bind({});
H4.args = {
  type: 'h4',
  children: 'H4 heading',
};
export const H5 = Template.bind({});
H5.args = {
  type: 'h5',
  children: 'H5 heading',
};
export const H6 = Template.bind({});
H6.args = {
  type: 'h6',
  children: 'H6 heading',
};
