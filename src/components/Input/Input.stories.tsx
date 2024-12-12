import { StoryFn, Meta } from '@storybook/react';
import Input from '.';
import { InputProps } from './interfaces';

export default {
  title: 'UI Kit/Input',
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Full name',
  value: '',
  onChange: () => alert(''),
};
