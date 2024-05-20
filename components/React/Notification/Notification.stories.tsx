// src/stories/Notification.stories.tsx

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Notification } from "./Notification";

export default {
  title: "Components/Notification",
  component: Notification,
} as Meta;

type NotificationProps = React.ComponentProps<typeof Notification>;

const Template: StoryFn<NotificationProps> = (args) => <Notification {...args}>{args.message}</Notification>;

export const Default = Template.bind({});
Default.args = {
  id: "default-notification",
  variant: "default",
  dismissible: true,
  message: "This is a notification—check it out!",
  show: true,
};

export const Alert = Template.bind({});
Alert.args = {
  id: "success-notification",
  variant: "alert",
  dismissible: true,
  message: "This is a alert notification",
  show: true,
};

export const Confirmation = Template.bind({});
Confirmation.args = {
  id: "error-notification",
  variant: "confirmation",
  dismissible: true,
  message: "This is an confirmation notification",
  show: true,
};

export const Information = Template.bind({});
Information.args = {
  id: "warning-notification",
  variant: "information",
  dismissible: true,
  message: "This is a information notification",
  show: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "warning-notification",
  variant: "error",
  dismissible: true,
  message: "This is a error notification",
  show: true,
};
