import { StoryFn, Meta } from '@storybook/react';
import Label from './Label'
import { LabelProps } from './interfaces';

export default {
  title: 'UI Kit/Label',
  component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label text'
};
