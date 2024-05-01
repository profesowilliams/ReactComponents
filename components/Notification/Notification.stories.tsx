import React, { useState } from 'react';
import { Notification, Button } from '../Notification';

export default {
  title: 'components/Notification',
  component: Notification,
  argTypes: {},
};

const types = ['error', 'information', 'confirmation', 'alert'];

const states = [
  'error',
  'information',
  'confirmation',
  'alert'
]

export const Examples: React.FC = () => {
  return types.map((variant: string, idx: number) => (
    <Notification key={idx} variant={variant} onClose={() => setShow(false)} dismissible>
      This is a {variant} alert—check it out!
    </Notification>
  ));
};

export const Links: React.FC = () => {
  return types.map((variant: string, idx: number) => (
    <Notification key={idx} variant={variant}>
      This is a {variant} alert with{' '}
      <Notification.Link href="#">an example link</Notification.Link>. Give it a click if you
      like.
    </Notification>
  ));
};

/*
export const Additionalcontent: React.FC = () => {
  return (
    <Notification variant="success">
      <Notification.Heading>Hey, nice to see you</Notification.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This example
        text is going to run a bit longer so that you can see how spacing within an
        alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice
        and tidy.
      </p>
    </Notification>
  );
};

export const Dismissingerror: React.FC = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Notification variant="danger" onClose={() => setShow(false)} dismissible>
        <Notification.Heading>Oh snap! You got an error!</Notification.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Notification>
    );
  }

  return <Button onClick={() => setShow(true)}>Show Notification</Button>;
};

export const Dismissingsuccess: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Notification show={show} variant="error">
        <Notification.Heading>How's it going?!</Notification.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Notification>

      {!show && <Button onClick={() => setShow(true)}>Show Notification</Button>}
    </>
  );
};
*/
