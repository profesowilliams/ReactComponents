// src/stories/Notification.stories.tsx

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Notification, NotificationLink, NotificationClose } from "./Notification";

export default {
  title: "Components/Notification",
  component: Notification,
} as Meta;

type NotificationProps = React.ComponentProps<typeof Notification>;

const Template: StoryFn<NotificationProps> = (args) =>
  <Notification {...args}>{args.message}
    <NotificationLink type="link" variant="link" theme="light" label="hyperlink" color="cobalt" url={args.url}>{args.link}</NotificationLink>
    <NotificationClose data-bs-dismiss="alert"></NotificationClose>
</Notification>;

export const Default = Template.bind({});
Default.args = {
  id: "default-notification",
  variant: "default",
  message: "This is a notification—check it out!",
  color: "cobalt",
  link: "Hyperlink",
  url: "https://www.google.com",
  show: true,
};

export const Alert = Template.bind({});
Alert.args = {
  id: "success-notification",
  variant: "alert",
  message: "This is a alert notification",
  show: true,
};

export const Confirmation = Template.bind({});
Confirmation.args = {
  id: "error-notification",
  variant: "confirmation",
  message: "This is an confirmation notification",
  show: true,
};

export const Information = Template.bind({});
Information.args = {
  id: "warning-notification",
  variant: "information",
  message: "This is a information notification",
  show: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "warning-notification",
  variant: "error",
  message: "This is a error notification",
  show: true,
};
