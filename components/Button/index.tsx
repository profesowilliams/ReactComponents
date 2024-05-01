import React from 'react';
import r2wc from '@r2wc/react-to-web-component';
import PropTypes from 'prop-types';
import { Button as BButton, Spinner } from 'react-bootstrap';
import './button.scss';

interface ButtonProps {
  label?: string;
  variant?: keyof typeof buttonVariant;
  color?: keyof typeof buttonColor;
  size?: keyof typeof buttonSize;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  type?: string;
  as?: string;
  loading?: boolean;
  loadingText?: string;
  theme: 'light' | 'dark'; // Add a theme prop
  SpinnerProps?: {
    size?: string;
    animation?: string;
  };
}

const buttonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  filled: 'filled',
  tertiary: 'tertiary',
  link: 'link',
  affirmative: 'affirmative',
  destructive: 'destructive',
};

const buttonColor = {
  dark_blue: 'dark-blue',
  ocean_blue: 'ocean-blue',
};

const buttonSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const Button: React.FC<ButtonProps> = ({ label, loading, loadingText, children, color, theme, SpinnerProps, ...props }) => {
  return (
    <BButton {...props} data-bs-theme={theme} data-bs-color={color}>
      {loading ? (
        <span className="btn-loading-container">
          <Spinner {...SpinnerProps} />
          <span className="btn-loading-text">{loadingText}</span>
        </span>
      ) : (
        <>
          {children}
          {label}
        </>
      )}
    </BButton>
  );
};

Button.defaultProps = {
  label: '',
  variant: 'secondary',
  color: 'dark_blue',
  size: 'sm',
  active: false,
  disabled: false,
  onClick: undefined,
  href: undefined,
  type: 'button',
  as: undefined,
  loading: false,
  loadingText: 'Loading',
  theme: 'light', // Provide a default theme
  SpinnerProps: {
    size: 'sm',
    animation: 'border',
  },
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(buttonVariant)) as React.Requireable<keyof typeof buttonVariant>,
  color: PropTypes.oneOf(Object.values(buttonColor)) as React.Requireable<keyof typeof buttonColor>,
  size: PropTypes.oneOf(Object.values(buttonSize)) as React.Requireable<keyof typeof buttonSize>,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.string,
  as: PropTypes.string,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']), // Specify theme prop type
  SpinnerProps: PropTypes.object as React.Requireable<object>,
};

export default Button;
export { Button, buttonVariant, buttonSize, buttonColor };

const TdsButton = r2wc(Button);
customElements.define('tds-button', TdsButton);
