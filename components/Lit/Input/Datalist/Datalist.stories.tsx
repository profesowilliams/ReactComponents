import { html } from 'lit';
import './Datalist';

export default {
  title: 'Components/Datalist',
  component: 'tds-datalist',
  argTypes: {
    options: { control: 'array' },
    inputId: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

interface DatalistProps {
  options: string[];
  inputId: string;
  placeholder: string;
}

const Template = ({ options, inputId, placeholder }: DatalistProps) => html` <tds-datalist .options=${options} .inputId=${inputId} .placeholder=${placeholder}></tds-datalist> `;

export const Default = Template.bind({});
Default.args = {
  options: ['San Francisco', 'New York', 'Seattle', 'Los Angeles', 'Chicago'],
  inputId: 'exampleDataList',
  placeholder: 'Type to search...',
  label: 'City',
};

export const Empty = Template.bind({});
Empty.args = {
  options: [],
  inputId: 'exampleDataListEmpty',
  placeholder: 'Type to search...',
  label: 'City',
};
