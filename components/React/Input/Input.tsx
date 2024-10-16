import React from 'react';
import { createComponent } from '@lit/react';
import { Input as LitInput } from '../../Lit/Input';

// Create the React component
const Input = createComponent({
  tagName: 'tds-input',
  elementClass: LitInput,
  react: React,
  events: {
    onDismiss: 'dismiss',
  },
});

export { Input };
