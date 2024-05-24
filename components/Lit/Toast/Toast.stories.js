import { html } from 'lit';
import { Toast, placementOptions } from '.';
import './ToastHeader';
import './ToastClose';
import './ToastBody';
import './ToastLink';

export default {
  title: 'Components/Toast',
  component: 'tds-toast',
  parameters: {},
  tags: ['autodocs'],
  render: (args) => new Toast(args),
  argTypes: {
    variant: {
      control: 'select',
      options: ['information', 'confirmation', 'alert', 'error'],
    },
    placement: {
      control: 'select',
      options: placementOptions, // Populate this directly from placementMap keys
    },
  },
  args: {
    variant: 'information',
    link: 'Action link',
    url: 'https://www.google.com',
    target: '_blank',
    placement: 'middle-center',
    message: 'This is a message',
  },
};

export const Default = {
  args: {
    variant: 'none',
  },
  render: (args) => html`
    <tds-toast variant="${args.variant}" placement="${args.placement}">
      <tds-toast-header> Here's some text </tds-toast-header>
      <tds-toast-body>
        <tds-toast-link url="${args.url}" target="${args.target}">${args.link}</tds-toast-link>
      </tds-toast-body>
    </tds-toast>
  `,
};

export const Confirmation = {
  args: {
    variant: 'confirmation',
    link: 'Action link',
    url: 'https://www.google.com',
    target: '_blank',
    placement: 'middle-center',
    text: 'Confirmation/complete message',
  },
  render: (args) => html`
    <tds-toast variant="${args.variant}" placement="${args.placement}">
      <tds-toast-header>
      ${args.text}
    </tds-toast-header>
      <tds-toast-body>
        <tds-toast-link url="${args.url}" target="${args.target}">${args.link}</tds-toast-link>
      </tds-toast-body>
    </tds-toast>
  `,
};

export const Alert = {
  args: {
    variant: 'alert',
    link: 'Action link',
    url: 'https://www.google.com',
    target: '_blank',
    placement: 'middle-center',
    text: 'Alert message',
  },
  render: (args) => html`
    <tds-toast variant="${args.variant}" placement="${args.placement}">
      <tds-toast-header>${args.text}</tds-toast-header>
      <tds-toast-body>
        <tds-toast-link url="${args.url}" target="${args.target}">${args.link}</tds-toast-link>
      </tds-toast-body>
    </tds-toast>
  `,
};

export const Error = {
  args: {
    variant: 'error',
    link: 'Action link',
    url: 'https://www.google.com',
    target: '_blank',
    placement: 'middle-center',
    text: 'Attention needed/warning message',
  },
  render: (args) => html`
    <tds-toast variant="${args.variant}" placement="${args.placement}">
      <tds-toast-header>${args.text}</tds-toast-header>
      <tds-toast-body>
        <tds-toast-link url="${args.url}" target="${args.target}">${args.link}</tds-toast-link>
      </tds-toast-body>
    </tds-toast>
  `,
};

export const Information = {
  args: {
    variant: 'information',
    link: 'Action link',
    url: 'https://www.google.com',
    target: '_blank',
    placement: 'middle-center',
    text: 'Information message',
  },
  render: (args) => html`
    <tds-toast variant="${args.variant}" placement="${args.placement}">
      <tds-toast-header>${args.text}</tds-toast-header>
      <tds-toast-body>
        <tds-toast-link url="${args.url}" target="${args.target}">${args.link}</tds-toast-link>
      </tds-toast-body>
    </tds-toast>
  `,
};
