import { StoryFn, Meta } from '@storybook/react';
import MessageBox from '.';
import { MessageBoxProps } from './interfaces';

export default {
  title: 'UI Kit/MessageBox',
  component: MessageBox,
} as Meta;

const Template: StoryFn<MessageBoxProps> = (args) => <MessageBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Full name',
};
