import { StoryFn, Meta } from '@storybook/react';
import Input from './Input'
import { InputProps } from './interfaces';

export default {
  title: 'UI Kit/Input',
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Full name'
};
