import React, { ReactNode } from 'react';
import r2wc from '@r2wc/react-to-web-component';
import PropTypes from 'prop-types';
import { Card as BCard } from 'react-bootstrap';

const { Header, Body, Title, Text } = BCard;

interface CardProps {
  width?: string | number;
  bg?: string;
  border?: string;
  text?: string;
  header?: ReactNode;
  title?: ReactNode;
  body?: ReactNode;
  variant?: string;
}

const cardBgs = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
  light: 'light',
};

const cardTexts = {
  ...cardBgs,
  white: 'white',
  muted: 'muted',
};

const Card: React.FC<CardProps> = ({ width = '18rem', header, title, body, variant, ...props }) => {
  return (
    <BCard border="primary" style={{ width }} variant={variant} {...props}>
      {header && <Header>{header}</Header>}
      <Body>
        {title && <Title>{title}</Title>}
        {body && <Text>{body}</Text>}
      </Body>
    </BCard>
  );
};

Card.defaultProps = {
  width: '18rem',
  bg: undefined,
  border: undefined,
  text: undefined,
  header: '',
  title: '',
  body: '',
};

Card.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bg: PropTypes.oneOf(Object.values(cardBgs)),
  border: PropTypes.oneOf(Object.values(cardBgs)),
  text: PropTypes.oneOf(Object.values(cardTexts)),
  header: PropTypes.any,
  title: PropTypes.any,
  body: PropTypes.any,
};

export default Card;
export { Card, cardBgs, cardTexts };

const TdsCard = r2wc(Card);
customElements.define('tds-card', TdsCard);
