import React from 'react';
import { createComponent } from '@lit/react';
import { Dropdown as LitDropdown } from '../../../Lit/Input/Dropdown';

// Create the React component
const Dropdown = createComponent({
  tagName: 'tds-dropdown',
  elementClass: LitDropdown,
  react: React,
  events: {
    onDismiss: 'dismiss',
  },
});

export {
  Dropdown,
};
