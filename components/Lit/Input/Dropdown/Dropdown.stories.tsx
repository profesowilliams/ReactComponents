import { html } from 'lit';
import './Dropdown';
import { Meta, StoryFn } from '@storybook/web-components';

export default {
  title: 'Components/Dropdown',
  component: 'tds-dropdown',
  parameters: {
    actions: {
      handles: ['input', 'click', 'keydown'],
    },
  },
} as Meta;

const Template: StoryFn = ({
  options,
  value,
  label,
  required,
  supporttext,
  errormessage,
  multiselect,
}) =>
  html` <tds-dropdown
    .options=${options}
    .value=${value}
    .label=${label}
    ?required=${required}
    .supporttext=${supporttext}
    .errormessage=${errormessage}
    ?multiselect=${multiselect}
  ></tds-dropdown>`;

export const Default = Template.bind({});
Default.args = {
  options: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
  label: 'Choose a color',
};

export const WithCustomValues = Template.bind({});
WithCustomValues.args = {
  options: ['Pink', 'Lavender', 'Magenta', 'Beige', 'Maroon'],
  value: 'Magenta',
  label: 'Choose a shade',
};

export const PreselectedValue = Template.bind({});
PreselectedValue.args = {
  options: ['Red', 'Green', 'Blue'],
  value: 'Green',
  label: 'Choose a color',
};

export const WithCheckboxOptions = Template.bind({});
WithCheckboxOptions.args = {
  options: [
    { label: 'Option 1', checked: false },
    { label: 'Option 2', checked: true },
    { label: 'Option 3', checked: false },
  ],
  label: 'Choose options',
  multiselect: true,
};

export const ControlledDropdown = () => html`
  <tds-dropdown
    .options=${['Red', 'Blue', 'Green']}
    .label=${'Choose a color'}
  ></tds-dropdown>
  <script>
    const comboBox = document.querySelector('tds-dropdown');
    setTimeout(() => {
      if (comboBox) {
        comboBox.openDropdown();
      }
    }, 1000);
  </script>
`;

export const MultiSelectExample = Template.bind({});
MultiSelectExample.args = {
  options: ['Pink', 'Lavender', 'Magenta', 'Beige', 'Maroon'],
  label: 'Choose multiple colors',
  multiselect: true,
};
