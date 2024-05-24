import { html, TemplateResult } from 'lit';
import '.';

interface ButtonArgs {
  theme: 'light' | 'dark';
  disabled: boolean;
  color: 'dark-blue' | 'ocean-blue' | 'teal' | 'cobalt';
  compact: boolean;
  variant: 'primary' | 'secondary' | 'filled' | 'tertiary' | 'link' | 'affirmative' | 'destructive';
  label?: string;
}

interface RenderFunction {
  (args: ButtonArgs): TemplateResult;
}

const renderButton: RenderFunction = (args) => html` <tds-button type="button" variant="${args.variant}" theme="${args.theme}" label="${args.label || args.variant}" color="${args.color}" ?disabled=${args.disabled} ?minimal=${args.compact}>${args.label || args.variant}</tds-button> `;

export default {
  title: 'Components/Button',
  component: 'tds-button',
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  render: (args: ButtonArgs) => renderButton(args),
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['dark-blue', 'ocean-blue', 'teal', 'cobalt'],
    },
    compact: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'filled', 'tertiary', 'link', 'affirmative', 'destructive'],
    },
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
  args: {
    theme: 'light',
    disabled: false,
    compact: false,
    variant: 'primary',
    color: 'dark-blue',
  },
};

export const Default = {
  render: renderButton,
  args: {
    label: 'Button',
  },
};

export const Primary = {
  render: renderButton,
  args: {
    variant: 'primary',
    disabled: false,
    color: 'dark-blue',
    label: 'Primary',
  },
};

export const Secondary = {
  render: renderButton,
  args: {
    ...Primary.args,
    variant: 'secondary',
    label: 'Secondary',
  },
};

export const Tertiary = {
  render: renderButton,
  args: {
    ...Primary.args,
    variant: 'tertiary',
    label: 'Tertiary',
  },
};

export const Link = {
  render: renderButton,
  args: {
    ...Primary.args,
    variant: 'link',
    label: 'Link',
  },
};

export const Affirmative = {
  render: renderButton,
  args: {
    ...Primary.args,
    variant: 'affirmative',
    label: 'Affirmative',
  },
};

export const Destructive = {
  render: renderButton,
  args: {
    ...Primary.args,
    variant: 'destructive',
    label: 'Destructive',
  },
};
