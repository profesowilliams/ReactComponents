import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Checkbox } from '.'; // Ensure Checkbox component is properly imported

interface CheckboxArgs {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  theme?: 'light' | 'dark';
}

const renderCheckbox: StoryFn<CheckboxArgs> = ({ checked, indeterminate, disabled }) => (
  <Checkbox checked={checked} indeterminate={indeterminate} disabled={disabled}>
    This is a test message.
  </Checkbox>
);

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Select the theme for the checkbox.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'light' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Determines if the checkbox is checked.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }, // Ensure this is a string
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Determines if the checkbox is in an indeterminate state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }, // Ensure this is a string
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Determines if the checkbox is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }, // Ensure this is a string
      },
    },
  },
  args: {
    theme: 'light',
    checked: false,
    indeterminate: false,
    disabled: false,
  },
  render: renderCheckbox,
} as Meta<CheckboxArgs>;

export const Default = {
  render: () => (
    <>
      <Checkbox id="unchecked">This is a test message.</Checkbox>
      <Checkbox id="checked" checked>
        This is a test message.
      </Checkbox>
      <Checkbox id="indeterminate" indeterminate>
        This is a test message.
      </Checkbox>
    </>
  ),
};

export const Unchecked = {
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
  },
  render: renderCheckbox,
};

export const Checked = {
  args: {
    checked: true,
    indeterminate: false,
    disabled: false,
  },
  render: renderCheckbox,
};

export const Indeterminate = {
  args: {
    checked: false,
    indeterminate: true,
    disabled: false,
  },
  render: renderCheckbox,
};

export const DisabledUnchecked = {
  args: {
    checked: false,
    indeterminate: false,
    disabled: true,
  },
  render: renderCheckbox,
};

export const DisabledChecked = {
  args: {
    checked: true,
    indeterminate: false,
    disabled: true,
  },
  render: renderCheckbox,
};

export const DisabledIndeterminate = {
  args: {
    checked: false,
    indeterminate: true,
    disabled: true,
  },
  render: renderCheckbox,
};
