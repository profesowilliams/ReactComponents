import { html } from 'lit';
import { Meta, StoryFn } from '@storybook/web-components';
import './Toast'; // Adjust the import path if necessary
import './ToastHeader';
import './ToastBody';
import './ToastLink';

interface ToastProps {
  variant: 'default' | 'information' | 'confirmation' | 'alert' | 'error';
  size: 'small' | 'medium' | 'large';
  placement:
    | 'custom'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'middle-left'
    | 'middle-center'
    | 'middle-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  show: boolean;
  timeout: number;
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export default {
  title: 'Components/Toast',
  component: 'tds-toast',
  args: {
    variant: 'default',
    size: 'medium',
    placement: 'top-center',
    show: true,
    timeout: 5000,
    top: '',
    right: '',
    bottom: '',
    left: '',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'information', 'confirmation', 'alert', 'error'],
      defaultValue: { summary: 'default' },
      description: 'Specifies the visual style of the toast.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: { summary: 'medium' },
      description: 'Defines the size of the toast.',
    },
    placement: {
      control: 'select',
      options: [
        'custom',
        'top-left',
        'top-center',
        'top-right',
        'middle-left',
        'middle-center',
        'middle-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      defaultValue: { summary: 'top-center' },
      description: 'Controls where the toast is displayed on the screen.',
    },
    show: {
      control: 'boolean',
      defaultValue: { summary: true },
      description: 'Determines whether the toast is visible.',
    },
    timeout: {
      control: 'number',
      defaultValue: { summary: 5000 },
      description:
        'Specifies how long (in milliseconds) the toast remains visible before auto-closing.',
    },
    top: {
      control: 'text',
      defaultValue: { summary: '' },
      description:
        'Specifies the top position when placement is set to "custom".',
    },
    right: {
      control: 'text',
      defaultValue: { summary: '' },
      description:
        'Specifies the right position when placement is set to "custom".',
    },
    bottom: {
      control: 'text',
      defaultValue: { summary: '' },
      description:
        'Specifies the bottom position when placement is set to "custom".',
    },
    left: {
      control: 'text',
      defaultValue: { summary: '' },
      description:
        'Specifies the left position when placement is set to "custom".',
    },
  },
} as Meta<ToastProps>;

const Template: StoryFn<ToastProps> = ({
  variant,
  size,
  placement,
  show,
  timeout,
  top,
  right,
  bottom,
  left,
}: ToastProps) => html`
  <tds-toast
    variant="${variant}"
    size="${size}"
    placement="${placement}"
    ?show="${show}"
    timeout="${timeout}"
    style="
      ${placement === 'custom'
      ? `top: ${top}; right: ${right}; bottom: ${bottom}; left: ${left};`
      : ''}"
  >
    <tds-toast-header>This is a ${variant} toast.</tds-toast-header>
    <tds-toast-body>
      <tds-toast-link url="#" target="_blank">Learn more</tds-toast-link>
    </tds-toast-body>
  </tds-toast>
`;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  placement: 'top-center',
  show: true,
  timeout: 5000,
  top: '',
  right: '',
  bottom: '',
  left: '',
};

export const Information = Template.bind({});
Information.args = {
  ...Default.args,
  variant: 'information',
};

export const Confirmation = Template.bind({});
Confirmation.args = {
  ...Default.args,
  variant: 'confirmation',
};

export const Alert = Template.bind({});
Alert.args = {
  ...Default.args,
  variant: 'alert',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  variant: 'error',
};

export const CustomPlacement = Template.bind({});
CustomPlacement.args = {
  ...Default.args,
  placement: 'custom',
  top: '10px',
  left: '10px',
};
