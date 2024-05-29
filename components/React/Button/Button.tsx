import React from 'react';
import { createComponent } from '@lit/react';
import { Button as LitButton } from '../../Lit/Button';

// Create the React component
const Button = createComponent({
  tagName: 'tds-button',
  elementClass: LitButton,
  react: React,
});

export default Button;
