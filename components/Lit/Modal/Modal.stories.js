import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import '../Button';
import '../Close';
import './index';
import './ModalHeader';
import './ModalTitle';
import './ModalBody';
import './ModalFooter';
import './ModalButton';

export default {
  title: 'Components/Modal',
  component: 'tds-modal',
  tags: ['autodocs'],
  args: {
    show: true,
    fade: true,
    title: 'Title',
    footer: false,
    size: 'md',
    centered: true,
    scrollable: false,
    backdrop: false,
  },
  argTypes: {
    show: { control: 'boolean' },
    fade: { control: 'boolean' },
    title: { control: 'text' },
    footer: { control: 'boolean' },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    centered: { control: 'boolean' },
    scrollable: { control: 'boolean' },
    backdrop: { control: 'boolean' },
  },
};

const Template = (args) => html`
  <tds-modal
    .show="${args.show}"
    .fade="${args.fade}"
    .size="${args.size}"
    .centered="${args.centered}"
    .scrollable="${args.scrollable}"
    .backdrop="${args.backdrop}"
    @onHide="${action('onHide')}"
    @onCancel="${action('onCancel')}"
    @onSave="${action('onSave')}"
  >
    <tds-modal-header>
      <tds-modal-title>${args.title}</tds-modal-title>
      <tds-close-button data-bs-dismiss="modal"></tds-close-button>
    </tds-modal-header>
    <tds-modal-body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </tds-modal-body>
    <tds-modal-footer>
      <tds-modal-button type="button" variant="tertiary" theme="light" label="Button" color="dark-blue" data-bs-dismiss="modal">Close</tds-modal-button>
      <tds-modal-button type="button" variant="primary" theme="light" label="Button" color="dark-blue">Save changes</tds-modal-button>
    </tds-modal-footer>
  </tds-modal>
`;

export const _Modal = Template.bind({});
_Modal.args = {
  show: true,
  fade: true,
  title: 'Title',
  footer: false,
  size: 'md',
  centered: true,
  scrollable: false,
};

export const DialogSmall = Template.bind({});
DialogSmall.args = {
  ..._Modal.args,
  size: 'sm',
};

export const DialogMedium = Template.bind({});
DialogMedium.args = {
  ..._Modal.args,
  size: 'md',
};

export const DialogLarge = Template.bind({});
DialogLarge.args = {
  ..._Modal.args,
  size: 'lg',
};
