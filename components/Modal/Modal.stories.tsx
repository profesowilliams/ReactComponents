import React, { useState } from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';

export default {
  title: 'components/Modal',
  component: Modal,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
};

interface ModalProps {
  show: boolean;
  title: string;
  footer: string;
}

const Template: React.FC<ModalProps> = (args) => {
  const [show, setShow] = useState<boolean>(args.show);
  const onClose = () => setShow(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Open modal</Button>

      <Modal {...args} show={show} onHide={onClose} onCancel={onClose} onSave={onClose}>
        <div style={{ height: 'max-content' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </Modal>
    </>
  );
};

export const _Modal = Template.bind({});
_Modal.args = {
  show: false,
  title: 'Title',
  footer: '',
};

export const DialogSmall = Template.bind({});
DialogSmall.args = {
  show: false,
  title: 'Title',
  footer: '',
  size: 'sm',
};

export const DialogMedium = Template.bind({});
DialogMedium.args = {
  show: true,
  title: 'Title',
  footer: '',
  size: 'md',
};

export const DialogLarge = Template.bind({});
DialogLarge.args = {
  show: false,
  title: 'Title',
  footer: '',
  size: 'lg',
};
