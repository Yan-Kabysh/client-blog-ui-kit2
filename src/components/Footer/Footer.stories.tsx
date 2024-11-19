"use client";
import { StoryFn, Meta } from '@storybook/react';
import { links } from './config';
import Footer from './Footer'
import { FooterProps } from './interfaces';
export default {
  title: 'UI Kit/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Modsen Client Blog',
    links: links,
    btnLabel: 'Subscribe',
    mainText: 'Subscribe to our news letter to get latest updates and news',
    btnClick: () => alert('Click'),
    address: 'Finstreet 118 2561 Fintown',
    email: 'Hello@finsweet.com 020 7993 2905'
};
