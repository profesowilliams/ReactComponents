export default {
  title: 'Components/Test',
  parameters: {
    layout: 'fullscreen',
  },
};

export const WebComponents = () => {
  const template = `
    <tds-flyout show size="lg" placement="end" id="offcanvas" aria-labelledby="offcanvasLabel" scrollable>
      <tds-flyout-header>
        <tds-flyout-title>Offcanvas</tds-flyout-title>
      </tds-flyout-header>
      <tds-flyout-body>
        Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
      </tds-flyout-body>
      <tds-flyout-footer>
        <tds-flyout-button type="button" variant="tertiary" theme="light" label="Button" color="teal" data-bs-dismiss="flyout">Close</tds-flyout-button>
        <tds-flyout-button type="button" variant="primary" theme="light" label="Button" color="teal">Save</tds-flyout-button>
      </tds-flyout-footer>

      <tds-modal show fade size="xl" placement="inline">
        <tds-modal-header>
          <tds-modal-title>Test</tds-modal-title>
        </tds-modal-header>
        <tds-modal-body>
          To complete placing your order for <strong>Avenir Global Cherry Advertising LTD</strong>, please provide the following information.
          <tds-input type="text" placeholder="Purchase order number" label="Purchase order number" class="pt-2"></tds-input>
        </tds-modal-body>
        <tds-modal-footer>
          <tds-modal-button type="button" variant="tertiary" theme="light" label="Button" color="dark-blue" data-bs-dismiss="modal">Close</tds-modal-button>
          <tds-modal-button type="button" variant="primary" theme="light" label="Button" color="dark-blue">Save</tds-modal-button>
        </tds-modal-footer>
      </tds-modal>
    </tds-flyout>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = template;
  return wrapper;
};
