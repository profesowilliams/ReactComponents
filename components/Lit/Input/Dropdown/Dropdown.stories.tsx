import { html, TemplateResult } from 'lit';
import './Dropdown'; // Import the dropdown component

export default {
  title: 'Components/Dropdown',
  component: 'tds-dropdown',
  argTypes: {
    options: { control: 'array' },
    selected: { control: 'text' },
    typeahead: { control: 'boolean' },
    onOptionSelected: { action: 'option-selected' },
  },
};

interface DropdownStoryProps {
  options: string[];
  selected: string;
  typeahead: boolean;
  onOptionSelected: (event: CustomEvent) => void;
}

const Template = ({
  options,
  selected,
  typeahead,
  onOptionSelected,
}: DropdownStoryProps): TemplateResult => html`
  <tds-dropdown
    .options="${options}"
    .selected="${selected}"
    .typeahead="${typeahead}"
    @option-selected="${onOptionSelected}"
  ></tds-dropdown>
`;

export const StandardDropdown = Template.bind({});
StandardDropdown.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selected: '',
  typeahead: false,
};

export const TypeaheadDropdown = Template.bind({});
TypeaheadDropdown.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  selected: '',
  typeahead: true,
};
