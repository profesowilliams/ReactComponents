// src/components/ToastStories.tsx
import React from 'react';
import { Meta } from '@storybook/react';
import { Toast, ToastHeader, ToastLink, ToastBody } from '.';

interface ToastProps {
  text?: string;
  variant: 'default' | 'information' | 'confirmation' | 'alert' | 'error';
  placement: 'middle-center';
  message: string;
  link: string;
  url: string;
  target?: string;
}

const ToastComponent: React.FC<ToastProps> = ({ variant, message, link, url, placement }) => (
  <Toast variant={variant} placement={placement}>
    <ToastHeader>{message}</ToastHeader>
    <ToastBody>
      <ToastLink url={url}>{link}</ToastLink>
    </ToastBody>
  </Toast>
);

export default {
  title: 'Components/Toast',
  component: ToastComponent,
  parameters: {
    docs: {
      story: {
        height: '250px',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'information', 'confirmation', 'alert', 'error'],
      description: 'Variant of the toast.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    message: {
      control: 'text',
      description: 'Message to be displayed in the toast.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'This is a default toast' },
      },
    },
    link: {
      control: 'text',
      description: 'Link text to be displayed in the toast.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Action link' },
      },
    },
    url: {
      control: 'text',
      description: 'URL for the link.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'https://www.google.com' },
      },
    },
  },
  args: {
    variant: 'default',
    message: 'This is a default toast',
    link: 'Action link',
    url: 'https://www.google.com',
  },
} as Meta<typeof ToastComponent>;

export const Default = {
  args: {
    variant: 'default',
    message: 'This is a default toast',
    link: 'Action link',
    url: 'https://www.google.com',
  },
  render: (args: ToastProps) => <ToastComponent {...args} />,
};

export const Confirmation = {
  args: {
    variant: 'confirmation',
    message: 'Confirmation/complete message',
    link: 'Action link',
    url: 'https://www.google.com',
  },
  render: (args: ToastProps) => <ToastComponent {...args} />,
};

export const Alert = {
  args: {
    variant: 'alert',
    message: 'Alert message',
    link: 'Action link',
    url: 'https://www.google.com',
  },
  render: (args: ToastProps) => <ToastComponent {...args} />,
};

export const Information = {
  args: {
    variant: 'information',
    message: 'Information message',
    link: 'Action link',
    url: 'https://www.google.com',
  },
  render: (args: ToastProps) => <ToastComponent {...args} />,
};

export const Error = {
  args: {
    variant: 'error',
    message: 'Attention needed/warning message',
    link: 'Action link',
    url: 'https://www.google.com',
  },
  render: (args: ToastProps) => <ToastComponent {...args} />,
};
