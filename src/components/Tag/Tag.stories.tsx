import { StoryFn, Meta } from '@storybook/react';
import Tag from '.';
import { TagProps } from './interfaces';

export default {
  title: 'UI Kit/Tag',
  component: Tag,
  argTypes: {
    onChange: { action: 'changed' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Tag Label',
};

export const Checked = Template.bind({});
Checked.args = {
  children: 'Checked Tag',
  checked: true,
};
