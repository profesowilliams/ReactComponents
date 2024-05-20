import { html } from 'lit';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: 'tds-checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => new Checkbox(args),
};

export const Default = {
  render: (args) => html`
    <tds-checkbox id="unchecked">This is a test message.</tds-checkbox>
    <tds-checkbox id="checked" checked>This is a test message.</tds-checkbox>
    <tds-checkbox id="indeterminate" indeterminate>This is a test message.</tds-checkbox>
  `,
};

export const Unchecked = {
  render: (args) => html`
    <tds-checkbox id="unchecked">This is a test message.</tds-checkbox>
  `,
};

export const Checked = {
  render: (args) => html`
    <tds-checkbox id="checked" checked>This is a test message.</tds-checkbox>
  `,
};

export const Indeterminate = {
  render: (args) => html`
    <tds-checkbox id="indeterminate" indeterminate>This is a test message.</tds-checkbox>
  `,
};

export const DisabledUnchecked = {
  render: (args) => html`
    <tds-checkbox id="unchecked" disabled>This is a test message.</tds-checkbox>
  `,
};

export const DisabledChecked = {
  render: (args) => html`
    <tds-checkbox id="checked" checked disabled>This is a test message.</tds-checkbox>
  `,
};

export const DisabledIndeterminate = {
  render: (args) => html`
    <tds-checkbox id="indeterminate" indeterminate disabled>This is a test message.</tds-checkbox>
  `,
};
