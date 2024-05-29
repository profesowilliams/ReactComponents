import React from 'react';
import { action } from '@storybook/addon-actions';
import { Modal, ModalBody, ModalButton, ModalClose, ModalFooter, ModalHeader, ModalTitle } from './Modal';

interface ModalStoryProps {
  theme: 'light' | 'dark';
  show: boolean;
  fade: boolean;
  title: string;
  size: 'sm' | 'md' | 'lg';
  centered: boolean;
  scrollable: boolean;
  backdrop: boolean;
}

const ModalStory: React.FC<ModalStoryProps> = ({ theme, show, fade, title, size, centered, scrollable, backdrop }) => (
  <Modal show={show} fade={fade} size={size} centered={centered} scrollable={scrollable} backdrop={backdrop} onHide={action('onHide')} onCancel={action('onCancel')} onSave={action('onSave')}>
    <ModalHeader>
      <ModalTitle>{title}</ModalTitle>
      <ModalClose data-bs-dismiss="modal" />
    </ModalHeader>
    <ModalBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</ModalBody>
    <ModalFooter>
      <ModalButton type="button" variant="tertiary" theme="light" label="Button" color="dark-blue" data-bs-dismiss="modal">
        Close
      </ModalButton>
      <ModalButton type="button" variant="primary" theme="light" label="Button" color="dark-blue">
        Save
      </ModalButton>
    </ModalFooter>
  </Modal>
);

export default {
  title: 'Components/Modal',
  component: ModalStory,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        height: '500px',
      },
    },
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'inline-radio' },
      description: 'Select the theme for the modal.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'light' },
      },
    },
    show: {
      control: 'boolean',
      description: 'Determines if the modal is shown.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    fade: {
      control: 'boolean',
      description: 'Determines if the modal has a fade animation.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    title: {
      control: 'text',
      description: 'Title of the modal.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Title' },
      },
    },
    footer: {
      control: 'boolean',
      description: 'Determines if the modal has a footer.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
      description: 'Size of the modal.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    centered: {
      control: 'boolean',
      description: 'Determines if the modal is centered.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    scrollable: {
      control: 'boolean',
      description: 'Determines if the modal content is scrollable.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    backdrop: {
      control: 'boolean',
      description: 'Determines if the modal has a backdrop.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    theme: 'light',
    show: true,
    fade: true,
    title: 'Title',
    footer: false,
    size: 'md',
    centered: true,
    scrollable: false,
    backdrop: false,
  },
};

export const _Modal = {
  args: {
    show: true,
    fade: true,
    title: 'Title',
    footer: false,
    size: 'md',
    centered: true,
    scrollable: false,
    backdrop: false,
  },
  render: (args) => <ModalStory {...args} />,
};

export const DialogSmall = {
  args: {
    ..._Modal.args,
    size: 'sm',
  },
  render: (args) => <ModalStory {...args} />,
};

export const DialogMedium = {
  args: {
    ..._Modal.args,
    size: 'md',
  },
  render: (args) => <ModalStory {...args} />,
};

export const DialogLarge = {
  args: {
    ..._Modal.args,
    size: 'lg',
  },
  render: (args) => <ModalStory {...args} />,
};
