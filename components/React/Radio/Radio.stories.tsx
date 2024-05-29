import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Radio } from '.'; // Ensure Radio component is properly imported

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => (
  <>
    <Radio id="unchecked" name="radio">
      This is a test message.
    </Radio>
    <Radio id="checked" name="radio" checked>
      This is a test message.
    </Radio>
    <Radio id="disabled-unchecked" name="radio" disabled>
      This is a test message.
    </Radio>
    <Radio id="disabled-checked" name="radio" checked disabled>
      This is a test message.
    </Radio>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const Unchecked: StoryFn = (args) => (
  <Radio id="unchecked" name="radio">
    This is a test message.
  </Radio>
);

export const Checked: StoryFn = (args) => (
  <Radio id="checked" name="radio" checked>
    This is a test message.
  </Radio>
);

export const DisabledUnchecked: StoryFn = (args) => (
  <Radio id="disabled-unchecked" name="radio" disabled>
    This is a test message.
  </Radio>
);

export const DisabledChecked: StoryFn = (args) => (
  <Radio id="disabled-checked" name="radio" checked disabled>
    This is a test message.
  </Radio>
);
