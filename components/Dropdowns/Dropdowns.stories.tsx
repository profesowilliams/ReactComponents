import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from '../Dropdowns'; // Corrected import path and prop type
import options from './data'; // Import options here

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    controlId: { control: 'text' },
    label: { control: 'text' },
    supporttext: { control: 'text' },
    required: { control: 'boolean' },
    data: { control: 'array' }, // Add 'data' prop to argTypes
    multiple: { control: 'boolean' }, // Add 'multiple' prop to argTypes
    size: { control: 'radio', options: ['sm', undefined, 'lg'] }, // Use undefined instead of 'default' for size options
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  controlId: 'floating-label-example',
  label: 'Choose a state...',
  supporttext: 'This is support text.',
  required: true,
  multiple: false,
  data: options, // Pass the options data from './data' to 'data' prop
  size: 'lg', // You can set size to 'sm', undefined, or 'lg'
};
