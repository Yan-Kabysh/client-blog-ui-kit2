import { StoryFn, Meta } from '@storybook/react';
import Select from '.';
import { SelectProps } from './interfaces';

export default {
  title: 'UI Kit/Select',
  component: Select,
} as Meta;

const options = [
  {
    value: '1',
    label: 'First',
  },
  {
    value: '2',
    label: 'Second',
  },
  {
    value: '3',
    label: 'Third',
  },
];

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Full name',
  options,
};
