import { StoryFn, Meta } from '@storybook/react';
import Button from '.';
import { ButtonProps } from './interfaces';

export default {
  title: 'UI Kit/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked'),
  title: 'Primaty button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click Me',
  variant: 'secondary',
  onClick: () => alert('Button clicked'),
  title: 'Secondary button',
};
