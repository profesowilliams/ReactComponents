import React, { useState } from 'react';
import { Toggle } from '../index';

export default {
  title: 'components/Toggle',
  component: Toggle,
  argTypes: {},
};

const data = [
  {
    id: '1',
    name: 'item 1',
  },
  {
    id: '2',
    name: 'item 2',
  },
];

interface ToggleProps {
  theme: 'light' | 'dark';
  type: 'switch';
  inline: true;
  value: string[];
  onChange: (value: string[]) => void;
  disabled?: string;
}

const Template: React.FC<ToggleProps> = (args) => {
  const [value, setValue] = useState<string[]>(['2']);

  return (
    <>
      <Toggle {...args} value={value} onChange={setValue} />
      <Toggle {...args} value={value} onChange={setValue} disabled="disabled" />
    </>
  );
};

export const Light: React.FC<ToggleProps> = Template.bind({});
Object.assign(Light, {
  args: {
    theme: 'light',
    data, // Assuming 'data' is defined elsewhere in your code
    type: 'switch',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const Dark: React.FC<ToggleProps> = Template.bind({});
Object.assign(Dark, {
  args: {
    theme: 'dark',
    data, // Assuming 'data' is defined elsewhere in your code
    type: 'switch',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
});
