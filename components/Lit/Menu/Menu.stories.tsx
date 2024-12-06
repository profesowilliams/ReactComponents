import { html, TemplateResult } from 'lit';
import '.';

interface MenuArgs {
  text: string;
  placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';
  size: boolean;
  hide: boolean;
  arrow: boolean;
  arrowPadding: number;
}

const renderMenu = (args: MenuArgs): TemplateResult => html`
  <tds-menu
    text="${args.text}"
    placement="${args.placement}"
    ?size="${args.size}"
    ?hide="${args.hide}"
    ?arrow="${args.arrow}"
    arrow-padding="${args.arrowPadding}"
  >
    <button>Hover me</button>
  </tds-menu>
`;

export default {
  title: 'Components/Menu',
  component: 'tds-menu',
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  render: (args: MenuArgs) => renderMenu(args),
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to be displayed inside the menu.',
      defaultValue: 'Menu text',
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
      ],
      description: 'Position of the menu relative to the wrapped element.',
      defaultValue: 'bottom',
    },
    size: {
      control: 'boolean',
      description: 'Whether to enable the size middleware to fit the viewport.',
      defaultValue: false,
    },
    hide: {
      control: 'boolean',
      description: 'Whether to enable hiding the menu when appropriate.',
      defaultValue: true,
    },
    arrow: {
      control: 'boolean',
      description:
        'Whether to enable the arrow pointing to the reference element.',
      defaultValue: true,
    },
    arrowPadding: {
      control: 'number',
      description:
        'Padding between the arrow and edges of the floating element.',
      defaultValue: 0,
    },
  },
  args: {
    text: 'Menu text',
    placement: 'bottom',
    size: false,
    hide: true,
    arrow: true,
    arrowPadding: 0,
  },
};

export const Menu = {
  render: renderMenu,
  args: {
    text: 'Menu text',
    placement: 'bottom',
    size: false,
    hide: true,
    arrow: true,
    arrowPadding: 0,
  },
};
