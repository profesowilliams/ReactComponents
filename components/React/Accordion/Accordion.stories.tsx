import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Accordion, AccordionBody, AccordionButton, AccordionHeader, AccordionItem } from './Accordion';

type AccordionProps = {
  outline?: 'top' | 'bottom' | 'topbottom' | 'full';
  orientation?: 'left' | 'right';
  theme?: 'light' | 'dark';
};

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    theme: 'light',
    outline: 'top',
    orientation: 'left',
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Sets the theme of the accordion',
    },
    outline: {
      control: 'select',
      description: 'Sets the outline of the accordion',
      options: ['top', 'bottom', 'topbottom', 'full'],
    },
    orientation: {
      control: 'radio',
      description: 'Sets the orientation of the accordion',
      options: ['left', 'right'],
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<AccordionProps>;

const Template: StoryFn<AccordionProps> = ({ outline, orientation, theme }) => (
  <Accordion outline={outline} orientation={orientation} theme={theme}>
    <AccordionItem expanded>
      <AccordionHeader>
        <AccordionButton>Accordion Item #1</AccordionButton>
      </AccordionHeader>
      <AccordionBody>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>
        <AccordionButton>Accordion Item #2</AccordionButton>
      </AccordionHeader>
      <AccordionBody>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>
        <AccordionButton>Accordion Item #3</AccordionButton>
      </AccordionHeader>
      <AccordionBody>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
      </AccordionBody>
    </AccordionItem>
  </Accordion>
);

export const AccordionStory = Template.bind({});
AccordionStory.args = {
  outline: 'top',
  orientation: 'left',
  theme: 'light',
};
