import { TemplateResult, html } from 'lit';
import './Flyout';
import './FlyoutHeader';
import './FlyoutTitle';
import './FlyoutBody';
import './FlyoutButton';
import './FlyoutClose';
import './FlyoutFooter';

interface FlyoutArgs {
  show: boolean;
  size: 'sm' | 'md' | 'lg' | 'xl';
  placement: 'start' | 'end' | 'top' | 'bottom';
  scrollable: boolean;
}

const renderFlyout = (args: FlyoutArgs): TemplateResult => html`
  <tds-flyout ?show=${args.show} size=${args.size} placement=${args.placement} id="offcanvas" aria-labelledby="offcanvasLabel" .scrollable="${args.scrollable}">
    <tds-flyout-header>
      <tds-flyout-title>Offcanvas</tds-flyout-title>
    </tds-flyout-header>
    <tds-flyout-body> Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here. </tds-flyout-body>
  </tds-flyout>
`;

const renderOneButtonFlyout = (args: FlyoutArgs): TemplateResult => html`
  <tds-flyout ?show=${args.show} size=${args.size} placement=${args.placement} id="offcanvas" aria-labelledby="offcanvasLabel" .scrollable="${args.scrollable}">
    <tds-flyout-header>
      <tds-flyout-title>Offcanvas</tds-flyout-title>
    </tds-flyout-header>
    <tds-flyout-body> Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here. </tds-flyout-body>
    <tds-flyout-footer>
      <tds-flyout-button type="button" variant="primary" theme="light" label="Button" color="teal" data-bs-dismiss="flyout">Close</tds-flyout-button>
    </tds-flyout-footer>
  </tds-flyout>
`;
const renderTwoButtonFlyout = (args: FlyoutArgs): TemplateResult => html`
  <tds-flyout ?show=${args.show} size=${args.size} placement=${args.placement} id="offcanvas" aria-labelledby="offcanvasLabel" .scrollable="${args.scrollable}">
    <tds-flyout-header>
      <tds-flyout-title>Offcanvas</tds-flyout-title>
    </tds-flyout-header>
    <tds-flyout-body> Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here. </tds-flyout-body>
    <tds-flyout-footer>
      <tds-flyout-button type="button" variant="tertiary" theme="light" label="Button" color="teal" data-bs-dismiss="flyout">Close</tds-flyout-button>
      <tds-flyout-button type="button" variant="primary" theme="light" label="Button" color="teal">Save</tds-flyout-button>
    </tds-flyout-footer>
  </tds-flyout>
`;

export default {
  title: 'Components/Flyout',
  component: 'tds-flyout',
  parameters: {
    docs: {
      story: {
        height: '500px',
      },
    },
  },
  tags: ['autodocs'],
  render: (args: FlyoutArgs) => renderFlyout(args),
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Determines if the flyout is shown.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Determines the size of the flyout.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    placement: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Determines the placement of the flyout.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
      },
    },
    scrollable: {
      control: 'boolean',
      description: 'Determines if the flyout content is scrollable.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    show: true,
    size: 'sm',
    placement: 'start',
    scrollable: false,
  },
};

export const Default = {
  args: {
    show: true,
    size: 'sm',
    placement: 'start',
  },
  render: (args: FlyoutArgs) => renderFlyout(args),
};

export const OneButtonStart = {
  args: {
    show: true,
    placement: 'start',
  },
  render: (args: FlyoutArgs) => renderOneButtonFlyout(args),
};

export const OneButtonEnd = {
  args: {
    show: true,
    placement: 'end',
  },
  render: (args: FlyoutArgs) => renderOneButtonFlyout(args),
};

export const TwoButtonStart = {
  args: {
    show: true,
    placement: 'start',
  },
  render: (args: FlyoutArgs) => renderTwoButtonFlyout(args),
};

export const TwoButtonEnd = {
  args: {
    show: true,
    placement: 'end',
  },
  render: (args: FlyoutArgs) => renderTwoButtonFlyout(args),
};
