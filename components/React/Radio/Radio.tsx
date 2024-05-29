import React from 'react';
import { createComponent } from '@lit/react';
import { Radio as LitRadio } from '../../Lit/Radio';

// Create the React component
const Radio = createComponent({
  tagName: 'tds-radio',
  elementClass: LitRadio,
  react: React,
});

export { Radio };
