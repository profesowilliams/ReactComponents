import React, { ReactNode, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip as BTooltip, OverlayTrigger } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import './index.scss';

interface TooltipProps {
  children: ReactNode;
  title: ReactNode;
  containerClassName?: string;
  flip?: boolean;
  placement?: keyof typeof tooltipPlacements;
  showByDefault?: boolean; // Add the showByDefault prop
  variant?: string;
}

const tooltipPlacements = {
  AUTO_START: 'auto-start',
  AUTO: 'auto',
  AUTO_END: 'auto-end',
  TOP_START: 'top-start',
  TOP: 'top',
  TOP_END: 'top-end',
  RIGHT_START: 'right-start',
  RIGHT: 'right',
  RIGHT_END: 'right-end',
  BOTTOM_END: 'bottom-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  LEFT_END: 'left-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  containerClassName = 'tooltip-container',
  showByDefault = false, // Set the default value
  ...props
}) => {
  // Add a condition to apply the 'show-tooltip' class
  const tooltipClass = showByDefault ? 'show-tooltip' : '';
  const [showTooltip, setShowTooltip] = useState(showByDefault);

  useEffect(() => {
    // Use a setTimeout to automatically show the Tooltip after a delay (e.g., 1000 milliseconds)
    const timeout = setTimeout(() => {
      setShowTooltip(true);
    }, 1000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const tooltip = (
    <BTooltip id="tooltip" show={showTooltip}>
      This is a tooltip.
    </BTooltip>
  );

  return (
    <OverlayTrigger
      overlay={tooltip}
      show={showTooltip}
      {...props}
    >
      <div className={`${containerClassName} ${tooltipClass}`}>{children}</div>
    </OverlayTrigger>
  );
};

Tooltip.defaultProps = {
  children: '',
  title: '',
  flip: true,
  placement: undefined,
  variant: 'plain',
};

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  flip: PropTypes.bool,
  placement: PropTypes.oneOf(Object.values(tooltipPlacements)),
  containerClassName: PropTypes.string,
  showByDefault: PropTypes.bool, // Add prop type validation
  variant: PropTypes.string,
};

export default Tooltip;
export { Tooltip, Button };
