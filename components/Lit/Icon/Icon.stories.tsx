import { html } from 'lit';
import '.'; // Adjust the path to where your component is located

export default {
  title: 'Components/Icon',
  component: 'tds-icon',
  argTypes: {
    name: { control: 'text' },
    state: { control: 'text' },
    size: { control: 'text' },
    viewbox: { control: 'text' },
    flip: { control: 'text' },
    rotate: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

const Template = ({ name, state, size, viewbox, flip, rotate, width, height }) => html` <tds-icon .name=${name} .state=${state} .size=${size} .viewbox=${viewbox} .flip=${flip} .rotate=${rotate} .width=${width} .height=${height}></tds-icon> `;

export const Default = Template.bind({});
Default.args = {
  name: 'person',
  state: 'default',
  size: '24',
  viewbox: '0 0 24 24',
  flip: '',
  rotate: '',
  width: '',
  height: '',
};

export const CustomState = Template.bind({});
CustomState.args = {
  name: 'person',
  state: 'blended',
  size: '24',
  viewbox: '0 0 24 24',
  flip: '',
  rotate: '',
  width: '',
  height: '',
};

export const FlippedIcon = Template.bind({});
FlippedIcon.args = {
  name: 'person',
  state: 'default',
  size: '24',
  viewbox: '0 0 24 24',
  flip: 'horizontal',
  rotate: '',
  width: '',
  height: '',
};

export const RotatedIcon = Template.bind({});
RotatedIcon.args = {
  name: 'person',
  state: 'default',
  size: '24',
  viewbox: '0 0 24 24',
  flip: '',
  rotate: '45',
  width: '',
  height: '',
};
