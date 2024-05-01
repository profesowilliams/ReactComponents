import React, { useState } from 'react';
import { Flyout } from '../Flyout';
import { Button } from '../Button';

export default {
  title: 'components/Flyout',
  component: Flyout,
  argTypes: {
    placement: {
      options: ['start', 'end'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
};

interface FlyoutProps {
  title: string;
  show: boolean;
}

const Template: React.FC<FlyoutProps> = (args) => {
  const [show, setShow] = useState<boolean>(args.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open
      </Button>
      <Flyout {...args} show={show} onHide={handleClose}>
        Some text as a placeholder. In real life, you can have the elements you have chosen. Like text, images, lists, etc.
      </Flyout>
    </>
  );
};

export const _Flyout = Template.bind({});
_Flyout.args = {
  title: 'Flyout',
  placement: 'start',
  show: true,
  size: 'md',
};
