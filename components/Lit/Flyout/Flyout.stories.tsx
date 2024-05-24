import { TemplateResult, html } from 'lit';
import './Flyout';

interface FlyoutArgs {
  show: boolean;
  placement: 'start' | 'end' | 'top' | 'bottom';
}

const renderFlyout = (args: FlyoutArgs): TemplateResult => html`
  <tds-flyout ?show=${args.show} placement=${args.placement} id="offcanvas" aria-labelledby="offcanvasLabel">
    <tds-flyout-header>
      <tds-flyout-title>Offcanvas</tds-flyout-title>
    </tds-flyout-header>
    <tds-flyout-body> Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here. </tds-flyout-body>
  </tds-flyout>
`;

export default {
  title: 'Components/Flyout',
  component: 'tds-flyout',
  parameters: {},
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
    placement: {
      control: 'select',
      options: ['start', 'end', 'top', 'bottom'],
      description: 'Determines the placement of the flyout.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
      },
    },
  },
  args: {
    show: true,
    placement: 'start',
  },
};

export const Default = {
  args: {
    show: true,
    placement: 'start',
  },
  render: (args: FlyoutArgs) => renderFlyout(args),
};

export const End = {
  args: {
    show: true,
    placement: 'end',
  },
  render: (args: FlyoutArgs) => renderFlyout(args),
};

export const Top = {
  args: {
    show: true,
    placement: 'top',
  },
  render: (args: FlyoutArgs) => renderFlyout(args),
};

export const Bottom = {
  args: {
    show: true,
    placement: 'bottom',
  },
  render: (args: FlyoutArgs) => renderFlyout(args),
};
