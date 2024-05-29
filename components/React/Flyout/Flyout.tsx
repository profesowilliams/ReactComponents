import React from 'react';
import { createComponent } from '@lit/react';
import { Flyout as LitFlyout } from '../../Lit/Flyout';
import { FlyoutBody as LitFlyoutBody } from '../../Lit/Flyout/FlyoutBody';
import { FlyoutButton as LitFlyoutButton } from '../../Lit/Flyout/FlyoutButton';
import { FlyoutFooter as LitFlyoutFooter } from '../../Lit/Flyout/FlyoutFooter';
import { FlyoutHeader as LitFlyoutHeader } from '../../Lit/Flyout/FlyoutHeader';
import { FlyoutTitle as LitFlyoutTitle } from '../../Lit/Flyout/FlyoutTitle';
import { FlyoutClose as LitFlyoutClose } from '../../Lit/Flyout/FlyoutClose';

// Create the React component
const Flyout = createComponent({
  tagName: 'tds-flyout',
  elementClass: LitFlyout,
  react: React,
});

// Create the React component
const FlyoutBody = createComponent({
  tagName: 'tds-flyout-body',
  elementClass: LitFlyoutBody,
  react: React,
});

// Create the React component
const FlyoutButton = createComponent({
  tagName: 'tds-flyout-button',
  elementClass: LitFlyoutButton,
  react: React,
});

// Create the React component
const FlyoutFooter = createComponent({
  tagName: 'tds-flyout-footer',
  elementClass: LitFlyoutFooter,
  react: React,
});

// Create the React component
const FlyoutHeader = createComponent({
  tagName: 'tds-flyout-header',
  elementClass: LitFlyoutHeader,
  react: React,
});

// Create the React component
const FlyoutTitle = createComponent({
  tagName: 'tds-flyout-title',
  elementClass: LitFlyoutTitle,
  react: React,
});

// Create the React component
const FlyoutClose = createComponent({
  tagName: 'tds-flyout-close',
  elementClass: LitFlyoutClose,
  react: React,
});

export { Flyout, FlyoutHeader, FlyoutTitle, FlyoutBody, FlyoutButton, FlyoutFooter, FlyoutClose };
