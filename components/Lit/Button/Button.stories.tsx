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

export const Button = {
  render: renderButton,
  args: {
    label: 'Button',
  },
};
