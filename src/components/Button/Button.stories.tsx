import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
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
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click Me',
  variant: 'secondary',
  onClick: () => alert('Button clicked'),
};