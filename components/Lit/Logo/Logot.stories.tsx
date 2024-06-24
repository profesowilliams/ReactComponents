import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import '.'; // Adjust the path to where your component is located

const meta: Meta = {
  title: 'Components/Logo',
  component: 'tds-logo',
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['techdata', 'tdsynnex', 'tecd'],
    },
    state: {
      control: { type: 'select' },
      options: ['black', 'dark', 'light', 'white'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  parameters: {
    actions: {
      handles: ['tds-logo-loaded'],
    },
  },
};

export default meta;

const Template: StoryFn = ({ name, state, width, height }) => html` <tds-logo name="${name}" state="${state}" width="${width}" height="${height}"></tds-logo> `;

export const Techdata = Template.bind({});
Techdata.args = {
  name: 'techdata',
  state: 'black',
};

export const TD_SYNNEX = Template.bind({});
TD_SYNNEX.args = {
  name: 'tdsynnex',
  state: 'dark',
};

export const TecD = Template.bind({});
TecD.args = {
  name: 'tecd',
  state: 'dark',
};
