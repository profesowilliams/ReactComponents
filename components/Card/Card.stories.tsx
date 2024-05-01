import React from 'react';
import { Card } from '../Card';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    width: { control: 'text' },
    header: { control: 'text' },
    title: { control: 'text' },
    body: { control: 'text' },
    variant: {
      control: 'select', // Use 'select' control type
      options: ['default', 'inset-body', 'thumbnail', 'image-above', 'horizontal-layout'], // Define available options
    },
  },
};

interface CardProps {
  width: string;
  header: string;
  title: string;
  body: string;
  variant: string;
}

const Template: React.FC<CardProps> = (args) => {
  return <Card {...args} />;
};

Template.args = {
  width: '18rem',
  header: 'Header',
  title: 'Card Title',
  body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  variant: 'default',
};

export const _InsetBody: React.FC<CardProps> = Template.bind({});
_InsetBody.args = {
  ...Template.args,
  variant: 'inset-body',
};

export const _Thumbnail: React.FC<CardProps> = Template.bind({});
_Thumbnail.args = {
  ...Template.args,
  variant: 'thumbnail',
};

export const _ImageAbove: React.FC<CardProps> = Template.bind({});
_ImageAbove.args = {
  ...Template.args,
  variant: 'image-above',
};

export const _HorizontalLayout: React.FC<CardProps> = Template.bind({});
_HorizontalLayout.args = {
  ...Template.args,
  variant: 'horizontal-layout',
};
