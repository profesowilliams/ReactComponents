import React, { ReactNode } from 'react';
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
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const cardTexts = {
  ...cardBgs,
  WHITE: 'white',
  MUTED: 'muted',
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
