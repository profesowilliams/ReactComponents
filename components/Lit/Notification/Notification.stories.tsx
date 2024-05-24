import { TemplateResult, html } from 'lit';
import '.';
import './NotificationLink';
import './NotificationClose';

interface NotificationArgs {
  variant: 'alert' | 'confirmation' | 'information' | 'error' | 'default';
  link: string;
  url: string;
  show: boolean;
}

const renderNotification = (args: NotificationArgs): TemplateResult => html`
  <tds-notification variant=${args.variant} .show=${args.show}>
    This is a ${args.variant} notification—check it out!
    <tds-notification-link type="link" variant="link" theme="light" label="Button" color="teal" url=${args.url}> ${args.link} </tds-notification-link>
    <tds-notification-close data-bs-dismiss="alert"></tds-notification-close>
  </tds-notification>
`;

export default {
  title: 'Components/Notification',
  component: 'tds-notification',
  parameters: {},
  tags: ['autodocs'],
  render: (args: NotificationArgs) => renderNotification(args),
  argTypes: {
    variant: {
      control: 'select',
      options: ['alert', 'confirmation', 'information', 'error', 'default'],
      description: 'Select the variant of the notification.',
      defaultValue: { summary: 'default' },
    },
    link: {
      control: 'text',
      description: 'Text for the hyperlink in the notification.',
      table: {
        type: { summary: 'string' },
      },
    },
    url: {
      control: 'text',
      description: 'URL for the hyperlink in the notification.',
      table: {
        type: { summary: 'string' },
      },
    },
    show: {
      control: 'boolean',
      description: 'Determines if the notification is shown.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the notification.',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'onClick',
      description: 'Action handler for click events.',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: {
    variant: 'default',
    link: 'Hyperlink',
    url: 'https://www.google.com',
    dismissible: false,
    show: true,
  },
};

export const Default = {
  args: {
    variant: 'default',
    link: 'Hyperlink',
    url: 'https://www.google.com',
    show: true,
  },
  render: (args: NotificationArgs) => renderNotification(args),
};

export const Alert = {
  args: {
    variant: 'alert',
    link: 'Hyperlink',
    url: 'https://www.google.com',
    show: true,
  },
  render: (args: NotificationArgs) => renderNotification(args),
};

export const Confirmation = {
  args: {
    variant: 'confirmation',
    link: 'Hyperlink',
    url: 'https://www.google.com',
    show: true,
  },
  render: (args: NotificationArgs) => renderNotification(args),
};

export const Information = {
  args: {
    variant: 'information',
    link: 'Hyperlink',
    url: 'https://www.google.com',
    show: true,
  },
  render: (args: NotificationArgs) => renderNotification(args),
};

export const Error = {
  args: {
    variant: 'error',
    link: 'Hyperlink',
    url: 'https://www.google.com',
    show: true,
  },
  render: (args: NotificationArgs) => renderNotification(args),
};
