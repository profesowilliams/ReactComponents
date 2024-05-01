import React, { useState } from 'react';
import { Checkbox } from '.';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    }
  },
};

interface Item {
  id: string;
  name: string;
  indeterminate?: boolean;
}

const data: Item[] = [
  {
    id: '1',
    name: 'item 1',
  },
  {
    id: '2',
    name: 'item 2',
  },
  {
    id: '3',
    name: 'item 3',
    indeterminate: true,
  },
];

const Template: React.FC = (args) => {
  const [value, setValue] = useState < string[] > (['2']);

  return (
    <>
      <Checkbox {...args} value={value} onChange={setValue} />
      <Checkbox {...args} value={value} onChange={setValue} disabled />
    </>
  );
};

const Singleton: React.FC = (args) => {
  const [value, setValue] = useState < string[] > (['2']);

  return (
    <>
      <Checkbox {...args} value={value} onChange={setValue} />
    </>
  );
};

export const Light: React.FC = Template.bind({});
Object.assign(Light, {
  args: {
    theme: 'light',
    data,
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const Dark: React.FC = Template.bind({});
Object.assign(Dark, {
  args: {
    theme: 'dark',
    data,
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
});


export const Unselected: React.FC = Singleton.bind({});
Object.assign(Unselected, {
  args: {
    theme: 'light',
    data: [
      {
        id: '1',
        name: 'Label',
        checked: false,
      },
    ],
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const DisabledUnselected: React.FC = Singleton.bind({});
Object.assign(DisabledUnselected, {
  args: {
    theme: 'light',
    data: [
      {
        id: '1',
        name: 'Label',
        checked: false,
      },
    ],
    disabled: true,
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const Selected: React.FC = Singleton.bind({});
Object.assign(Selected, {
  args: {
    theme: 'light',
    data: [
      {
        id: '1',
        name: 'Label',
        checked: true,
      },
    ],
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const DisabledSelected: React.FC = Singleton.bind({});
Object.assign(DisabledSelected, {
  args: {
    theme: 'light',
    data: [
      {
        id: '1',
        name: 'Label',
        checked: true,
      },
    ],
    disabled: true,
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const Indeterminate: React.FC = Singleton.bind({});
Object.assign(Indeterminate, {
  args: {
    theme: 'light',
    data: [
      {
        id: '1',
        name: 'Label',
        indeterminate: true,
      },
    ],
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const DisabledIndeterminate: React.FC = Singleton.bind({});
Object.assign(DisabledIndeterminate, {
  args: {
    theme: 'light',
    data: [
      {
        id: '1',
        name: 'Label',
        indeterminate: true,
      },
    ],
    disabled: true,
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});
