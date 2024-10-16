import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    actions: {
      handles: ['input', 'click', 'keydown'],
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Dropdown {...args}>{args.label}</Dropdown>;

export const Default = Template.bind({});
Default.args = {
  options: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
  label: 'Choose a color',
  required: true,
};

export const WithCustomValues = Template.bind({});
WithCustomValues.args = {
  options: ['Pink', 'Lavender', 'Magenta', 'Beige', 'Maroon'],
  value: 'Magenta',
  label: 'Choose a shade',
};

export const PreselectedValue = Template.bind({});
PreselectedValue.args = {
  options: ['Red', 'Green', 'Blue'],
  value: 'Green',
  label: 'Choose a color',
};

export const WithCheckboxOptions = Template.bind({});
WithCheckboxOptions.args = {
  options: [
    { label: 'Option 1', checked: false },
    { label: 'Option 2', checked: true },
    { label: 'Option 3', checked: false },
  ],
  label: 'Choose options',
  multiselect: true,
};

export const MultiSelectExample = Template.bind({});
MultiSelectExample.args = {
  options: ['Pink', 'Lavender', 'Magenta', 'Beige', 'Maroon'],
  label: 'Choose multiple colors',
  multiselect: true,
};
