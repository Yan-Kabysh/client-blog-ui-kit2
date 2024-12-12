import { StoryFn, Meta } from '@storybook/react';
import Category from '.';
import { CategoryProps } from './interfaces';
import StartupIcon from '../../core/assets/startupIcon.svg';

export default {
  title: 'UI Kit/Category',
  component: Category,
} as Meta;

const Template: StoryFn<CategoryProps> = (args) => <Category {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Startup',
  icon: <StartupIcon />,
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Startup',
  icon: <StartupIcon />,
  type: 'secondary',
};
