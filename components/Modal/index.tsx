import React, { ReactNode } from 'react';
import r2wc from '@r2wc/react-to-web-component';
import PropTypes, { bool, func, node, oneOf, string } from 'prop-types';
import { Modal as BModal } from 'react-bootstrap';
import { Button } from '../Button';
import './modal.scss';

const modalSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

interface ModalProps {
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode | boolean;
  show?: boolean;
  onHide?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  backdrop?: boolean | 'static';
  size?: keyof typeof modalSize;
  centered?: boolean;
  fullscreen?: boolean;
  scrollable?: boolean;
  dialogClassName?: string;
  contentClassName?: string;
  backdropClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  footer,
  show,
  onHide,
  onSave,
  onCancel,
  backdrop,
  ...props
}) => {
  let footerComponent = (
    <>
      <Button className="button-cancel" variant="secondary" size="lg" onClick={onCancel}>
        Cancel
      </Button>
      <Button className="button-save" variant="primary" size="lg" onClick={onSave}>
        Save
      </Button>
    </>
  );

  if (footer || footer === false) {
    footerComponent = footer;
  }

  return (
    <BModal
      show={show}
      onHide={onHide}
      backdrop={backdrop || 'static'}
      keyboard={backdrop === true}
      {...props}
    >
      <BModal.Header closeButton>
        <BModal.Title>{title}</BModal.Title>
      </BModal.Header>
      <BModal.Body>{children}</BModal.Body>
      {footerComponent && <BModal.Footer>{footerComponent}</BModal.Footer>}
    </BModal>
  );
};

Modal.defaultProps = {
  title: '',
  children: '',
  footer: '',
  show: false,
  backdrop: true,
  size: 'lg',
  centered: true,
  fullscreen: false,
  scrollable: false,
  dialogClassName: 'bootstrap-dialog',
  contentClassName: 'bootstrap-dialog-content',
  backdropClassName: 'bootstrap-dialog-backdrop',
  onHide: undefined,
  onSave: undefined,
  onCancel: undefined,
};

Modal.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  show: PropTypes.bool,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
  size: PropTypes.oneOf(Object.keys(modalSize)),
  centered: PropTypes.bool,
  fullscreen: PropTypes.bool,
  scrollable: PropTypes.bool,
  dialogClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  onHide: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Modal;
export { Modal };

const TdsModal = r2wc(Modal);
customElements.define('tds-modal', TdsModal);
