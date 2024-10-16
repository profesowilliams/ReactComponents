import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Heading } from './Heading'; // Ensure this path is correct

interface HeadingArgs {
  as: keyof JSX.IntrinsicElements;
  size?: string;
  slot: string;
}

const meta: Meta<HeadingArgs> = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: [
        'h0',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'h7',
        'h8',
        'h9',
        'h10',
      ],
    },
    size: {
      control: 'text',
    },
    slot: {
      control: 'text',
    },
  },
  args: {
    as: 'h2',
    size: '',
    slot: 'Default Heading',
  },
};

export default meta;

const Template: Story<HeadingArgs> = (args) => {
  const { as: Tag, size, slot } = args;
  return (
    <Heading as={Tag} size={size}>
      {slot}
    </Heading>
  );
};

export const Default = Template.bind({});
Default.args = {
  as: 'h2',
  size: '',
  slot: 'Default Heading',
};
