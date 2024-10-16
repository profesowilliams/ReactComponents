import React from 'react';
import { createComponent } from '@lit/react';
import { Heading as LitHeading } from '../../Lit/Heading';

// Create the React component
const Heading = createComponent({
  tagName: 'tds-heading',
  elementClass: LitHeading,
  react: React,
  events: {
    onDismiss: 'dismiss',
  },
});

export { Heading };
