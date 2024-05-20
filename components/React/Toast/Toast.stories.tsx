// src/stories/Toast.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Toast, ToastHeader, ToastLink, ToastBody, ToastClose } from '.';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'information', 'confirmation', 'alert', 'error'],
    },
  },
  args: {
    id: 'default-toast',
    variant: 'default',
    link: 'Action link',
    url: 'https://www.google.com',
    target: '_blank',
    placement: 'middle-center',
    message: '',
  },
} as Meta<typeof Toast>;

type ToastProps = React.ComponentProps<typeof Toast> & {
    text?: string;
    variant?: string;
    placement?: string;
};
const Template: StoryFn<ToastProps> = (args) => (
  <Toast {...args}>
    <ToastHeader>{args.message}</ToastHeader>
    <ToastBody>
      <ToastLink href='{args.url'>{args.link}</ToastLink>
    </ToastBody>
  </Toast>
);

export const Default = Template.bind({});
Default.args = {
  id: 'default-toast',
  type: 'toast',
  variant: 'default',
  size: 'medium',
  placement: 'middle-center',
  message: 'This is a default toast',
};

export const Confirmation = Template.bind({});
Confirmation.args = {
  id: 'confirmation-toast',
  variant: 'confirmation',
  link: 'Action link',
  url: 'https://www.google.com',
  target: '_blank',
  placement: 'middle-center',
  message: 'Confirmation/complete message',
};

export const Alert = Template.bind({});
Alert.args = {
  id: 'alert-toast',
  variant: 'alert',
  link: 'Action link',
  url: 'https://www.google.com',
  target: '_blank',
  placement: 'middle-center',
  message: 'Alert message',
};

export const Information = Template.bind({});
Information.args = {
  id: 'information-toast',
  variant: 'information',
  link: 'Action link',
  url: 'https://www.google.com',
  target: '_blank',
  placement: 'middle-center',
  message: 'Information message',
};

export const Error = Template.bind({});
Error.args = {
  id: 'error-toast',
  variant: 'error',
  link: 'Action link',
  url: 'https://www.google.com',
  target: '_blank',
  placement: 'middle-center',
  message: 'Attention needed/warning message',
};
