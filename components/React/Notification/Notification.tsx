import React from "react";
import { createComponent } from "@lit/react";
import { Notification as LitNotification } from "../../Lit/Notification";
import { NotificationLink as LitNotificationLink } from "../../Lit/Notification/NotificationLink";
import "../../Lit/Close/Close";

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
  tagName: "tds-notification",
  elementClass: LitNotificationLink,
  react: React,
  events: {
    onDismiss: "dismiss",
  },
});

export { Notification, NotificationLink };
