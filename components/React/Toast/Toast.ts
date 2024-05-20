// src/components/react/Toast.tsx
import React from "react";
import { createComponent } from "@lit/react";
import { Toast as LitToast } from "../../Lit/Toast";
import { ToastHeader as LitToastHeader } from "../../Lit/Toast/ToastHeader";
import { ToastClose as LitToastClose } from "../../Lit/Toast/ToastClose";
import { ToastBody as LitToastBody } from "../../Lit/Toast/ToastBody";
import { ToastLink as LitToastLink } from "../../Lit/Toast/ToastLink";

// Create the React component
const Toast = createComponent({
  tagName: "tds-toast",
  elementClass: LitToast,
  react: React,
  events: {},
});

// Create the React component
const ToastHeader = createComponent({
  tagName: "tds-toast-header",
  elementClass: LitToastHeader,
  react: React,
  events: {},
});

// Create the React component
const ToastClose = createComponent({
  tagName: "tds-toast-close",
  elementClass: LitToastClose,
  react: React,
  events: {},
});

// Create the React component
const ToastBody = createComponent({
  tagName: "tds-toast-body",
  elementClass: LitToastBody,
  react: React,
  events: {},
});

// Create the React component
const ToastLink = createComponent({
  tagName: "tds-toast-link",
  elementClass: LitToastLink,
  react: React,
  events: {},
});

export { Toast, ToastHeader, ToastClose, ToastBody, ToastLink };
