import React from 'react';
import { createComponent } from '@lit/react';
import { Modal as LitModal } from '../../Lit/Modal';
import { ModalBody as LitModalBody } from '../../Lit/Modal/ModalBody';
import { ModalHeader as LitModalHeader } from '../../Lit/Modal/ModalHeader';
import { ModalTitle as LitModalTitle } from '../../Lit/Modal/ModalTitle';
import { ModalFooter as LitModalFooter } from '../../Lit/Modal/ModalFooter';
import { ModalButton as LitModalButton } from '../../Lit/Modal/ModalButton';
import { ModalClose as LitModalClose } from '../../Lit/Modal/ModalClose';

// Create the React component
const Modal = createComponent({
  tagName: 'tds-modal',
  elementClass: LitModal,
  react: React,
  events: {
    onDismiss: 'dismiss',
  },
});

// Create the React component
const ModalBody = createComponent({
  tagName: 'tds-modal-body',
  elementClass: LitModalBody,
  react: React,
});

// Create the React component
const ModalHeader = createComponent({
  tagName: 'tds-modal-header',
  elementClass: LitModalHeader,
  react: React,
});

// Create the React component
const ModalTitle = createComponent({
  tagName: 'tds-modal-title',
  elementClass: LitModalTitle,
  react: React,
});

// Create the React component
const ModalFooter = createComponent({
  tagName: 'tds-modal-footer',
  elementClass: LitModalFooter,
  react: React,
});

// Create the React component
const ModalButton = createComponent({
  tagName: 'tds-modal-button',
  elementClass: LitModalButton,
  react: React,
});

// Create the React component
const ModalClose = createComponent({
  tagName: 'tds-modal-close',
  elementClass: LitModalClose,
  react: React,
});

export { Modal, ModalBody, ModalHeader, ModalTitle, ModalFooter, ModalButton, ModalClose };
