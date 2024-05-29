import React from 'react';
import { createComponent } from '@lit/react';
import { Accordion as LitAccordion } from '../../Lit/Accordion/Accordion';
import { AccordionItem as LitAccordionItem } from '../../Lit/Accordion/AccordionItem';
import { AccordionBody as LitAccordionBody } from '../../Lit/Accordion/AccordionBody';
import { AccordionHeader as LitAccordionHeader } from '../../Lit/Accordion/AccordionHeader';
import { AccordionButton as LitAccordionButton } from '../../Lit/Accordion/AccordionButton';

// Create the React component
const Accordion = createComponent({
  tagName: 'tds-accordion',
  elementClass: LitAccordion,
  react: React,
  events: {},
});

// Create the React component
const AccordionItem = createComponent({
  tagName: 'tds-accordion-item',
  elementClass: LitAccordionItem,
  react: React,
  events: {},
});

// Create the React component
const AccordionBody = createComponent({
  tagName: 'tds-accordion-body',
  elementClass: LitAccordionBody,
  react: React,
  events: {},
});

// Create the React component
const AccordionHeader = createComponent({
  tagName: 'tds-accordion-header',
  elementClass: LitAccordionHeader,
  react: React,
  events: {},
});

// Create the React component
const AccordionButton = createComponent({
  tagName: 'tds-accordion-button',
  elementClass: LitAccordionButton,
  react: React,
  events: {},
});

export { Accordion, AccordionItem, AccordionBody, AccordionHeader, AccordionButton };
