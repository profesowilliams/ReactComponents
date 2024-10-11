import '../../../components/Lit/Flyout';
import '../../../components/Lit/Flyout/FlyoutHeader';
import '../../../components/Lit/Flyout/FlyoutBody';
import '../../../components/Lit/Flyout/FlyoutFooter';
import '../../../components/Lit/Flyout/FlyoutButton';
import '../../../components/Lit/Heading';
import '../../../components/Lit/Notification';
import '../../../components/Lit/Input';
import '../../../components/Lit/Input/Dropdown';
import '../../../components/Lit/Icon';

export default {
  title: 'Pages/InTouch/Import',
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
    },
  },
  tags: ['!autodocs'],
};

export const Import = () => {
  const template = `
    <tds-flyout show size="sm" placement="end" id="offcanvas" aria-labelledby="offcanvasLabel" scrollable backdrop="true">
      <tds-flyout-header>
        <tds-flyout-title>Import</tds-flyout-title>
      </tds-flyout-header>
      <tds-flyout-body id="flyout-body">
        <p class="pt-3 mb-4 text-black-100">Complete the required fields below to import new quotes.</p>
        <tds-dropdown id="dropdown-1" typeahead="true" required class="pt-3 mb-4" size="100"></tds-dropdown>
        <tds-dropdown id="dropdown-2" typeahead="true" required class="pt-3 mb-5" size="100"></tds-dropdown>
        <tds-file-input></tds-file-input>
      </tds-flyout-body>
      <tds-flyout-footer>
        <tds-flyout-button disabled type="button" variant="primary" theme="light" label="Button" color="teal">Import</tds-flyout-button>
      </tds-flyout-footer>
    </tds-flyout>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = template;

  return wrapper;
};
