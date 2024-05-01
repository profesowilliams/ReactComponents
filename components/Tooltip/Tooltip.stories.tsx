import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../Button';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
    parameters: {
    layout: 'centered',
  },
  argTypes: {
    placement: {
      options: ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      control: { type: 'select' },
    },
    variant: {
      options: ['plain', 'rich'],
      control: { type: 'inline-radio' },
    },
  },
};

interface TooltipProps {
  children: React.ReactNode;
  title: string;
  flip: boolean;
  placement?: string;
}

const Template: React.FC<TooltipProps> = (args) => {
  return <Tooltip {...args} />;
};

export const _Tooltip = Template.bind({});
_Tooltip.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: undefined,
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
  variant: 'plain',
};

export const TopStart = Template.bind({});
TopStart.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'top-start',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const Top = Template.bind({});
Top.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'top',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const TopEnd = Template.bind({});
TopEnd.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'top-end',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const RightStart = Template.bind({});
RightStart.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'right-start',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const Right = Template.bind({});
Right.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'right',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const RightEnd = Template.bind({});
RightEnd.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'right-end',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const BottomStart = Template.bind({});
BottomStart.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'bottom-start',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const Bottom = Template.bind({});
Bottom.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'bottom',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const BottomEnd = Template.bind({});
BottomEnd.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'bottom-end',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const LeftStart = Template.bind({});
LeftStart.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'left-start',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const Left = Template.bind({});
Left.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'left',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const LeftEnd = Template.bind({});
LeftEnd.args = {
  children: <Button>Hover to see</Button>,
  title: 'A description goes here.',
  flip: true,
  placement: 'left-end',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
};

export const RichTopStart = Template.bind({});
RichTopStart.args = {
  // consider passing title, description, and action as props
  // title should only be used on variant rich
  children: <Button>Hover to see</Button>,
  title: '<div class="h9">Title</div><div class="p3">A description goes here.</div><div><a href="#">Action</a></div>',
  flip: true,
  placement: 'left-end',
  showByDefault: false,
  show: 'true',
  trigger: 'hover',
  variant: 'rich',
};
