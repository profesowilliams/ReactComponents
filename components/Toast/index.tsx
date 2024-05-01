import React from 'react';
import PropTypes from 'prop-types';
import { Toast, ToastContainer } from 'react-bootstrap';
import './toast.scss';

const { Header, Body } = Toast;

const toastsPositions = {
  TOP_START: 'top-start',
  TOP_CENTER: 'top-center',
  TOP_END: 'top-end',
  MIDDLE_START: 'middle-start',
  MIDDLE_CENTER: 'middle-center',
  MIDDLE_END: 'middle-end',
  BOTTOM_START: 'bottom-start',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_END: 'bottom-end',
};

const toastsState = {
  ERROR: 'error',
  INFORMATION: 'information',
  CONFIRMATION: 'confirmation',
  ALERT: 'alert',
};

interface ToastsProps {
  header?: any;
  children?: any;
  show?: boolean;
  position?: keyof typeof toastsPositions;
  delay?: number;
  autohide?: boolean;
  state?: keyof typeof toastsState | undefined;
  onClose?: () => void;
}

const Toasts: React.FC<ToastsProps> = ({ header, children, position, state, ...props }) => {
  return (
    <ToastContainer className="p-3" position={position}>
      <Toast {...props} data-bs-state={state}>
        {header && <Header>{header}</Header>}
        {children && <Body>{children}</Body>}
      </Toast>
    </ToastContainer>
  );
};

Toasts.defaultProps = {
  header: '',
  children: '',
  show: false,
  position: toastsPositions.MIDDLE_CENTER,
  delay: 3000,
  autohide: false,
  state: undefined,
  onClose: () => {},
};

Toasts.propTypes = {
  header: PropTypes.any,
  children: PropTypes.any,
  show: PropTypes.bool,
  position: PropTypes.oneOf(Object.values(toastsPositions)),
  delay: PropTypes.number,
  autohide: PropTypes.bool,
  state: PropTypes.oneOf(Object.values(toastsState)),
  onClose: PropTypes.func,
};

export default Toasts;
export { Toasts, toastsPositions, toastsState };
