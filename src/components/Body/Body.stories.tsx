import { StoryFn, Meta } from '@storybook/react';
import Body from './Body'
import { BodyProps } from './interfaces';

export default {
  title: 'UI Kit/Body',
  component: Body,
} as Meta;

const Template: StoryFn<BodyProps> = (args) => <Body {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Body text primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 2,
  children: 'Body text secodary'
};