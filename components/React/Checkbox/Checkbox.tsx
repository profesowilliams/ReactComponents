import React from 'react';
import { createComponent } from '@lit/react';
import { Checkbox as LitCheckbox } from '../../Lit/Checkbox';

// Create the React component
const Checkbox = createComponent({
  tagName: 'tds-checkbox',
  elementClass: LitCheckbox,
  react: React,
  events: {
    onDismiss: 'dismiss',
  },
});

export { Checkbox };
