import React from 'react';
import r2wc from '@r2wc/react-to-web-component';
import PropTypes from 'prop-types';
import { Button as BButton, Spinner } from 'react-bootstrap';
import './button.scss';

interface ButtonProps {
  children?: any;
  label?: string;
  variant?: keyof typeof buttonVariant;
  color?: keyof typeof buttonColor;
  size?: keyof typeof buttonSize;
  active?: boolean;
  disabled?: boolean;
  compact?: boolean;
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
  teal: 'teal',
};

const buttonSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const Button: React.FC<ButtonProps> = ({
  label,
  loading,
  loadingText,
  children,
  color,
  theme,
  compact,
  SpinnerProps,
  ...props
}) => {
  return (
    <BButton
      {...props}
      data-bs-theme={theme}
      data-bs-color={color}
      data-bs-compact={compact}
    >
      {loading ? (
        <span className="btn-loading-container">
          <Spinner {...SpinnerProps} />
          <span className="btn-loading-text">{loadingText}</span>
        </span>
      ) : (
        children || label
      )}
      <slot />
    </BButton>
  );
};

Button.defaultProps = {
  children: '',
  label: '',
  variant: 'secondary',
  color: 'dark-blue',
  size: 'lg',
  active: false,
  compact: false,
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
  children: PropTypes.any,
  label: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(buttonVariant)) as React.Requireable<
    keyof typeof buttonVariant
  >,
  color: PropTypes.oneOf(Object.values(buttonColor)) as React.Requireable<
    keyof typeof buttonColor
  >,
  size: PropTypes.oneOf(Object.values(buttonSize)) as React.Requireable<
    keyof typeof buttonSize
  >,
  active: PropTypes.bool,
  compact: PropTypes.bool,
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

const TdsButton = r2wc(Button, { shadow: 'open' });
customElements.define('tds-button', TdsButton);
