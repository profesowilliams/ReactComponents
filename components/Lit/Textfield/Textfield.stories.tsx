import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import './Textfield'; // Adjust the path as necessary to import your component

export default {
  title: 'Components/Textfield',
  component: 'tds-textfield',
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'text' },
    id: { control: 'text' },
  },
  args: {
    placeholder: 'name@example.com',
    label: 'Email address',
    type: 'email',
    id: 'floatingInput',
  },
} as Meta;

const Template: StoryFn = ({ placeholder, label, type, id }) => html` <tds-textfield .placeholder=${placeholder} .label=${label} .type=${type} .id=${id}></tds-textfield> `;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'name@example.com',
  label: 'Email address',
  type: 'email',
  id: 'floatingInput',
};
