import React, { useState } from 'react';
import { Toasts, toastsState, toastsPositions } from '../Toast';
import { Button } from '../Button';

export default {
  title: 'components/Toasts',
  component: Toasts,
  argTypes: {
    position: {
      options: Object.values(toastsPositions),
      control: { type: 'select' },
    },
    state: {
      options: Object.values(toastsState),
      control: { type: 'select' },
    },
  },
};

const Template = (args: any) => {
  const [show, setShow] = useState<boolean>(true);
  const onClose = () => setShow(false);
  return (
    <>
      <Toasts {...args} show={show} onClose={onClose} />
      {!show && <Button onClick={() => setShow(true)}>Click show Toasts</Button>}
    </>
  );
};

export const _Toasts = Template.bind({});
_Toasts.args = {
  header: (
    <>
      <div className="me-auto">An example of a toast</div>
    </>
  ),
  children: 'Action link',
  show: false,
  position: undefined,
  delay: 3000,
  autohide: false,
  state: undefined,
};

export const Error = Template.bind({});
Error.args = {
  header: (
    <>
      <div className="me-auto">Attention needed/warning message</div>
    </>
  ),
  children: 'Action link',
  show: false,
  position: undefined,
  delay: 3000,
  autohide: false,
  state: 'error',
};

export const Information = Template.bind({});
Information.args = {
  header: (
    <>
      <div className="me-auto">Information message</div>
    </>
  ),
  children: 'Action link',
  show: false,
  position: undefined,
  delay: 3000,
  autohide: false,
  state: 'information',
};

export const Confirmation = Template.bind({});
Confirmation.args = {
  header: (
    <>
      <div className="me-auto">Confirmation/complete message</div>
    </>
  ),
  children: 'Action link',
  show: false,
  position: undefined,
  delay: 3000,
  autohide: false,
  state: 'confirmation',
};

export const Alert = Template.bind({});
Alert.args = {
  header: (
    <>
      <div className="me-auto">Alert message</div>
    </>
  ),
  children: 'Action link',
  show: false,
  position: undefined,
  delay: 3000,
  autohide: false,
  state: 'alert',
};
