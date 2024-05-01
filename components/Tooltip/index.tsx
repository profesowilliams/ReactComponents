import React, { ReactNode, useEffect, useState } from 'react';
import r2wc from '@r2wc/react-to-web-component';
import PropTypes from 'prop-types';
import { Tooltip as BTooltip, OverlayTrigger } from 'react-bootstrap';
import './index.scss';

interface TooltipProps {
  children: ReactNode;
  title: ReactNode;
  containerClassName?: string;
  flip?: boolean;
  placement?: keyof typeof tooltipPlacements;
  showByDefault?: boolean;
  variant?: string; // Update to include the 'variant' prop
}

const tooltipPlacements = {
  // ... (rest of your code)
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  containerClassName = 'tooltip-container',
  showByDefault = false,
  variant,
  ...props
}) => {
  const [showTooltip, setShowTooltip] = useState(showByDefault);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTooltip(true);
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Conditionally add the 'data-bs-custom-class' attribute if variant is 'rich'
  const tooltip = (
    <BTooltip id="tooltip" show={showTooltip} data-bs-variation={variant}>
      {/* Render HTML content if variant is 'rich' */}
      {variant === 'rich' ? (
        <div dangerouslySetInnerHTML={{ __html: title }} />
      ) : (
        title
      )}
    </BTooltip>
  );

  return (
    <OverlayTrigger overlay={tooltip} show={showTooltip} {...props}>
      <div className={`${containerClassName}`}>{children}</div>
    </OverlayTrigger>
  );
};

Tooltip.defaultProps = {
  children: '',
  title: '',
  flip: true,
  placement: undefined,
  variant: 'plain', // Default variant is 'plain'
};

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  flip: PropTypes.bool,
  placement: PropTypes.oneOf(Object.values(tooltipPlacements)),
  containerClassName: PropTypes.string,
  showByDefault: PropTypes.bool,
  variant: PropTypes.string,
};

export default Tooltip;
export { Tooltip };

const TdsTooltip = r2wc(Tooltip);
customElements.define('tds-tooltip', TdsTooltip);
