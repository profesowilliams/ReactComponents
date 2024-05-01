import React from 'react';
import r2wc from "@r2wc/react-to-web-component";
import PropTypes from 'prop-types';
import { Accordion as BAccordion } from 'react-bootstrap';
import './accordion.scss';

const { Item, Header, Body } = BAccordion;

interface AccordionProps {
  options: Array<{
    id: string;
    title: string;
    component: React.ReactNode;
  }>;
  defaultActiveKey: string;
  flush: boolean;
  orientation: "left" | "right"; // Add the orientation prop with the specified values
  variation: "top" | "bottom" | "topbottom" | "full"; // Add the variation prop with the specified values
}


const Accordion: React.FC<AccordionProps> = ({ options, orientation, variation, ...props }) => {
  return (
    <BAccordion {...props} data-bs-orientation={orientation} data-bs-variation={variation}>
      {options.map((item) => (
        <Item key={item.id} eventKey={item.id}>
          <Header>{item.title}</Header>
          <Body>{item.component}</Body>
        </Item>
      ))}
    </BAccordion>
  );
};

Accordion.defaultProps = {
  options: [],
  defaultActiveKey: '',
  flush: false,
  orientation: "right",
  variation: "top",
};

export default Accordion;
export { Accordion };

const TdsAccordion = r2wc(Accordion);
customElements.define('tds-accordion', TdsAccordion);
