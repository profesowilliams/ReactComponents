import React from 'react';
import r2wc from "@r2wc/react-to-web-component";
import PropTypes from 'prop-types';
import { Offcanvas } from 'react-bootstrap';
import classnames from 'classnames';
import './index.scss';

const { Header, Title, Body } = Offcanvas;

interface FlyoutProps {
  show?: boolean;
  title?: string;
  children?: React.ReactNode;
  placement?: 'start' | 'end' | 'top' | 'bottom';
  backdrop?: boolean;
  scroll?: boolean;
  backdropClassName?: string;
  onHide?: () => void;
  size?: 'xl' | 'xxl' | 'md' | 'sm' | 'lg';
}

const Flyout: React.FC<FlyoutProps> = ({ title, children, size, ...props }) => {
  const offcanvasClassName = classnames('offcanvas', {
    'offcanvas-xl': size === 'xl',
    'offcanvas-xxl': size === 'xxl',
    'offcanvas-md': size === 'md',
    'offcanvas-sm': size === 'sm',
    'offcanvas-lg': size === 'lg',
  });

  return (
    <Offcanvas {...props} className={offcanvasClassName}>
      <Header closeButton>
        <Title>{title}</Title>
      </Header>
      <Body>{children}</Body>
    </Offcanvas>
  );
};


Flyout.defaultProps = {
  show: false,
  title: '',
  children: '',
  placement: 'start',
  backdrop: true,
  scroll: false,
  backdropClassName: 'canvas-backdrop',
  onHide: () => { },
  size: 'md',
};

Flyout.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  placement: PropTypes.oneOf(['start', 'end', 'top', 'bottom']),
  backdrop: PropTypes.bool,
  scroll: PropTypes.bool,
  backdropClassName: PropTypes.string,
  onHide: PropTypes.func,
  size: PropTypes.oneOf(['xl', 'xxl', 'md', 'sm', 'lg']),
};

export default Flyout;
export { Flyout };

const TdsFlyout = r2wc(Flyout);
customElements.define('tds-flyout', TdsFlyout);
