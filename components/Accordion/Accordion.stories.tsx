import React from 'react';
import { Accordion } from '.';

export default {
  title: 'components/Accordion',
  component: Accordion,
  argTypes: {
    variation: {
      options: ['top', 'bottom', 'topbottom', 'full'],
      control: { type: 'select' },
      defaultValue: 'top',
    },
    orientation: {
      options: ['right', 'left'],
      control: { type: 'select' },
      defaultValue: 'right',
    },
  },
};

interface AccordionItem {
  id: string;
  title: string;
  component: React.ReactNode;
}

const options: AccordionItem[] = [
  {
    id: '1',
    title: 'Accordion Item #1',
    component: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum. 1
      </div>
    ),
  },
  {
    id: '2',
    title: 'Accordion Item #2',
    component: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum. 2
      </div>
    ),
  },
];

const Template: React.FC<{
  options: AccordionItem[];
  defaultActiveKey: string;
  orientation: "left" | "right"; // Add orientation prop
  variation: "top" | "bottom" | "topbottom" | "full"; // Add variation prop
}> = ({ options, defaultActiveKey, orientation, variation }) => {
  return <Accordion options={options} defaultActiveKey={defaultActiveKey} orientation={orientation} variation={variation} />;
};


export const _Accordion = Template.bind({});
_Accordion.args = {
  options,
  defaultActiveKey: '1',
  orientation: 'left', // Add the orientation prop here
  variation: 'top', // Add the variation prop here
};

