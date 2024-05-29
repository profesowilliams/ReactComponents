import React from "react";
import { createComponent } from "@lit/react";
import { Notification as LitNotification } from "../../Lit/Notification";
import { NotificationLink as LitNotificationLink } from '../../Lit/Notification/NotificationLink';
import { NotificationClose as LitNotificationClose } from '../../Lit/Notification/NotificationClose';

// Create the React component
const Notification = createComponent({
  tagName: "tds-notification",
  elementClass: LitNotification,
  react: React,
  events: {
    onDismiss: "dismiss",
  },
});

// Create the React component
const NotificationLink = createComponent({
  tagName: "tds-notification-link",
  elementClass: LitNotificationLink,
  react: React,
});

// Create the React component
const NotificationClose = createComponent({
  tagName: "tds-notification-close",
  elementClass: LitNotificationClose,
  react: React,
});

export { Notification, NotificationLink, NotificationClose };
