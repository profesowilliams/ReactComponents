import React from 'react';
import r2wc from '@r2wc/react-to-web-component';
import PropTypes from 'prop-types';
import { Toast, ToastContainer } from 'react-bootstrap';
import './toast.scss';

const { Header, Body } = Toast;

const toastsPositions = {
  top_start: 'top-start',
  top_center: 'top-center',
  top_end: 'top-end',
  middle_start: 'middle-start',
  middle_center: 'middle-center',
  middle_end: 'middle-end',
  bottom_start: 'bottom-start',
  bottom_center: 'bottom-center',
  bottom_end: 'bottom-end',
};

const toastsState = {
  error: 'error',
  information: 'information',
  confirmation: 'confirmation',
  alert: 'alert',
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
  position: toastsPositions.middle_center,
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

const TdsToasts = r2wc(Toasts);
customElements.define('tds-toasts', TdsToasts);
