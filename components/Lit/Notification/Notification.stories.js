import { html } from 'lit';
import { Notification } from './index';

export default {
  title: 'Components/Notification',
  component: 'tds-notification',
  parameters: {},
  tags: ['autodocs'],
  render: (args) => new Notification(args),
  argTypes: {
    variant: {
      control: 'select',
      options: ['alert', 'confirmation', 'information', 'error'],
    },
    dismissible: {
      control: 'boolean',
    },
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
  args: {
    variant: 'none',
    link: 'https://www.google.com',
    dismissible: false,
    show: true,
  },
};

export const Default = {
  args: {
    variant: 'default',
    link: 'https://www.google.com',
    dismissible: false,
  },
  render: (args) => html`
    <tds-notification
      variant="${args.variant}"
      link="${args.link}"
      .dismissible=${args.dismissible}
      .show=${args.show}
      >This is a notification—check it out!</tds-notification
    >
  `,
};

export const Alert = {
  args: {
    variant: 'alert',
    link: 'https://www.google.com',
    dismissible: false,
  },
  render: (args) => html`
    <tds-notification
      variant="${args.variant}"
      link="${args.link}"
      .dismissible=${args.dismissible}
      .show=${args.show}
      >This is an ${args.variant} notification—check it out!</tds-notification
    >
  `,
};

export const Confirmation = {
  args: {
    variant: 'confirmation',
    link: 'https://www.google.com',
    dismissible: false,
  },
  render: (args) => html`
    <tds-notification
      variant="${args.variant}"
      link="${args.link}"
      .dismissible=${args.dismissible}
      .show=${args.show}
      >This is an ${args.variant} notification—check it out!</tds-notification
    >
  `,
};

export const Information = {
  args: {
    variant: 'information',
    link: 'https://www.google.com',
    dismissible: false,
  },
  render: (args) => html`
    <tds-notification
      variant="${args.variant}"
      link="${args.link}"
      .dismissible=${args.dismissible}
      .show=${args.show}
      >This is an ${args.variant} notification—check it out!</tds-notification
    >
  `,
};

export const Error = {
  args: {
    variant: 'error',
    link: 'https://www.google.com',
    dismissible: false,
    show: true,
  },
  render: (args) => html`
    <tds-notification
      variant="${args.variant}"
      link="${args.link}"
      .dismissible=${args.dismissible}
      .show=${args.show}
      >This is an ${args.variant} notification—check it out!</tds-notification
    >
  `,
};
