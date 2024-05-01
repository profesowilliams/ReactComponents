import React, { useState } from 'react';
import { Radio } from '../index';
import { Form } from 'react-bootstrap';

export default {
  title: 'components/Radio',
  component: Radio,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
};

interface RadioItem {
  id: string;
  name: string;
  disabled?: boolean;
}

const data: RadioItem[] = [
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
  },
  {
    id: '4',
    name: 'item 4',
  },
  {
    id: '5',
    name: 'item 5',
    disabled: true,
  },
];

const Template: React.FC = (args) => {
  const [value, setValue] = useState<string>('1');

  return (
    <Form>
      <Radio {...args} value={value} onChange={setValue} />
      <div>value: {value}</div>
    </Form>
  );
};

export const Light = Template.bind({});
Object.assign(Light, {
  args: {
    data,
    type: 'radio',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const Dark = Template.bind({});
Object.assign(Dark, {
  args: {
    data,
    type: 'radio',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
});

export const Selected = Template.bind({});
Selected.args = {
  theme: 'light',
  data: [
    {
      id: '1',
      name: 'Selected',
      checked: true,
    },
  ],
  inline: true,
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  theme: 'light',
  data: [
    {
      id: '1',
      name: 'Selected',
      disabled: true,
    },
  ],
  inline: true,
};

export const Unselected = Template.bind({});
Unselected.args = {
  theme: 'light',
  data: [
    {
      id: '2',
      name: 'Unselected',
    },
  ],
};

export const DisabledUnselected = Template.bind({});
DisabledUnselected.args = {
  theme: 'light',
  data: [
    {
      id: '2',
      name: 'Unselected',
      disabled: true,
      value: '',
    },
  ],
};
