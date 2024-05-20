// src/stories/radio.stories.ts
import { html } from "lit";
import { Meta, StoryObj } from "@storybook/web-components";
import "./index";

export default {
  title: "Components/Radio",
  component: "tds-radio",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <tds-radio id="unchecked" name="radio">This is a test message.</tds-radio>
    <tds-radio id="checked" name="radio" checked
      >This is a test message.</tds-radio
    >
    <tds-radio id="disabled-unchecked" name="radio" disabled
      >This is a test message.</tds-radio
    >
    <tds-radio id="disabled-checked" name="radio" checked disabled
      >This is a test message.</tds-radio
    >
  `,
};

export const Unchecked: Story = {
  render: (args) => html`
    <tds-radio id="unchecked" name="radio">This is a test message.</tds-radio>
  `,
};

export const Checked: Story = {
  render: (args) => html`
    <tds-radio id="checked" name="radio" checked
      >This is a test message.</tds-radio
    >
  `,
};

export const DisabledUnchecked: Story = {
  render: (args) => html`
    <tds-radio id="disabled-unchecked" name="radio" disabled
      >This is a test message.</tds-radio
    >
  `,
};

export const DisabledChecked: Story = {
  render: (args) => html`
    <tds-radio id="disabled-checked" name="radio" checked disabled
      >This is a test message.</tds-radio
    >
  `,
};
