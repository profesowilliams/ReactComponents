import React from 'react';
import { Button, buttonVariant, buttonSize, buttonColor } from '../Button';

export default {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary', // Default variant for the button
    size: 'sm', // Default size for the button
    disabled: false,
    label: 'Button', // Default label for the button
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(buttonVariant),
      control: { type: 'select' },
    },
    color: {
      options: Object.values(buttonColor),
      control: { type: 'inline-radio' },
    },
    size: {
      options: Object.values(buttonSize),
      control: { type: 'select' },
    },
    active: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
};

interface ButtonProps {
  variant: typeof buttonVariant;
  size: string;
  disabled: boolean;
  label: string;
}

const Template: React.FC<ButtonProps> = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {Object.values(buttonVariant).map((variant) => (
        <span key={variant} style={{ margin: 5 }}>
          <Button {...args} variant={variant}>
            {variant}
          </Button>
        </span>
      ))}
    </div>
  );
};

const Btn: React.FC<ButtonProps> = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <span key={args.variant} style={{ margin: 5 }}>
        <Button {...args} variant={args.variant}></Button>
      </span>
    </div>
  );
};

export const Primary = Btn.bind({});
Primary.args = {
  theme: 'light',
  variant: 'primary',
  size: 'sm',
  disabled: false,
  label: 'Primary',
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Secondary = Btn.bind({});
Secondary.args = {
  theme: 'light',
  variant: 'secondary',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Secondary',
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Filled = Btn.bind({});
Filled.args = {
  theme: 'light',
  variant: 'filled',
  size: 'sm',
  disabled: false,
  label: 'Filled',
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Tertiary = Btn.bind({});
Tertiary.args = {
  theme: 'light',
  variant: 'tertiary',
  size: 'sm',
  disabled: false,
  label: 'Tertiary',
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Link = Btn.bind({});
Link.args = {
  theme: 'light',
  variant: 'link',
  size: 'sm',
  disabled: false,
  label: 'Link',
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Affirmative = Btn.bind({});
Affirmative.args = {
  theme: 'light',
  variant: 'affirmative',
  size: 'sm',
  disabled: false,
  label: 'Affirmative',
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Destructive = Btn.bind({});
Destructive.args = {
  theme: 'light',
  variant: 'destructive',
  size: 'sm',
  disabled: false,
  label: 'Destructive',
  parameters: {
    backgrounds: { default: 'light' },
  },
};
