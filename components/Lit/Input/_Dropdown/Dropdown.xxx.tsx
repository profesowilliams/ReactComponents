import { html, TemplateResult } from 'lit';
import './Dropdown'; // Import the dropdown component

export default {
  title: 'Components/Dropdown',
  component: 'tds-dropdown',
  argTypes: {
    options: { control: 'array' },
    selected: { control: 'array' },
    typeahead: { control: 'boolean' },
    required: { control: 'boolean' },
    errorMessage: { control: 'text' },
    loadOptions: { control: 'boolean' },
    onOptionsSelected: { action: 'options-selected' },
    onDropdownOpened: { action: 'dropdown-opened' },
    onDropdownClosed: { action: 'dropdown-closed' },
  },
};

interface DropdownStoryProps {
  options: string[];
  selected: string[];
  typeahead: boolean;
  required: boolean;
  errorMessage: string;
  loadOptions: boolean;
  onOptionsSelected: (event: CustomEvent) => void;
  onDropdownOpened: () => void;
  onDropdownClosed: () => void;
}

// Simulate async data loading
const asyncLoadOptions = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Async Option 1', 'Async Option 2', 'Async Option 3']);
    }, 1000);
  });
};

const Template = ({
  options,
  selected,
  typeahead,
  required,
  errorMessage,
  loadOptions,
  onOptionsSelected,
  onDropdownOpened,
  onDropdownClosed,
}: DropdownStoryProps): TemplateResult => html`
  <tds-dropdown
    .options="${loadOptions ? [] : options}"
    .selected="${selected}"
    .typeahead="${typeahead}"
    .required="${required}"
    .loadOptions="${loadOptions ? asyncLoadOptions : undefined}"
    .errorMessage="${errorMessage}"
    @options-selected="${onOptionsSelected}"
    @dropdown-opened="${onDropdownOpened}"
    @dropdown-closed="${onDropdownClosed}"
  ></tds-dropdown>
`;

export const StandardDropdown = Template.bind({});
StandardDropdown.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selected: [],
  typeahead: false,
  required: false,
  errorMessage: '',
  loadOptions: false,
};

export const TypeaheadDropdown = Template.bind({});
TypeaheadDropdown.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  selected: [],
  typeahead: true,
  required: false,
  errorMessage: '',
  loadOptions: false,
};

export const MultiSelectDropdown = Template.bind({});
MultiSelectDropdown.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  selected: ['Option 1'],
  typeahead: true,
  required: true,
  errorMessage: '',
  loadOptions: false,
};

export const DropdownWithValidation = Template.bind({});
DropdownWithValidation.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selected: [],
  typeahead: false,
  required: true,
  errorMessage: 'Please select at least one option.',
  loadOptions: false,
};

export const AsyncOptionsDropdown = Template.bind({});
AsyncOptionsDropdown.args = {
  options: [],
  selected: [],
  typeahead: false,
  required: false,
  errorMessage: '',
  loadOptions: true, // This will trigger the async loading function
};
