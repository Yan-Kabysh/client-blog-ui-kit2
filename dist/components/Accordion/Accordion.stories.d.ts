import { Meta, StoryFn } from '@storybook/react';
import { AccordionProps } from './Accordion';
declare const _default: Meta<AccordionStoryProps>;
export default _default;
type AccordionStoryProps = Pick<AccordionProps, 'title' | 'children'>;
export declare const AccordionStoryTemplate: StoryFn<AccordionStoryProps>;
