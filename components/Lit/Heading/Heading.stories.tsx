import { Meta, StoryFn } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import './Heading'; // Ensure this path is correct

interface HeadingArgs {
  as: string;
  size?: string;
  slot: string;
}

const meta: Meta<HeadingArgs> = {
  title: 'Components/Heading',
  component: 'tds-heading',
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10'],
    },
    size: {
      control: 'text',
    },
    slot: {
      control: 'text',
    },
  },
  args: {
    as: 'h2',
    size: '',
    slot: 'Default Heading',
  },
};

export default meta;

const Template: StoryFn<HeadingArgs> = (args: HeadingArgs): TemplateResult => html` <tds-heading .as=${args.as} .size=${args.size}> ${args.slot} </tds-heading> `;

export const Default = Template.bind({});
Default.args = {
  as: 'h2',
  size: '',
  slot: 'Default Heading',
};

export const LargeHeading = Template.bind({});
LargeHeading.args = {
  as: 'h1',
  size: 'large',
  slot: 'Large Heading',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  as: 'h3',
  size: 'custom-size',
  slot: 'Custom Size Heading',
};

export const AriaLevel = Template.bind({});
AriaLevel.args = {
  as: 'h7',
  size: '',
  slot: 'Heading with ARIA Level',
};
