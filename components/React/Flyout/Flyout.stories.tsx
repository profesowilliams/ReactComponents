import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Flyout, FlyoutHeader, FlyoutTitle, FlyoutBody, FlyoutButton, FlyoutFooter } from './';

interface FlyoutArgs {
  show: boolean;
  size: 'sm' | 'md' | 'lg' | 'xl';
  placement: 'start' | 'end' | 'top' | 'bottom';
  scrollable: boolean;
}

export default {
  title: 'Components/Flyout',
  component: Flyout,
  parameters: {
    docs: {
      story: {
        height: '500px',
      },
    },
  },
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Determines if the flyout is shown.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Determines the size of the flyout.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
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
    scrollable: {
      control: 'boolean',
      description: 'Determines if the flyout content is scrollable.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    show: true,
    size: 'sm',
    placement: 'start',
    scrollable: false,
  },
} as Meta<typeof Flyout>;

const Template: StoryFn<FlyoutArgs> = (args) => (
  <Flyout {...args}>
    <FlyoutHeader>
      <FlyoutTitle>Offcanvas</FlyoutTitle>
    </FlyoutHeader>
    <FlyoutBody>Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.</FlyoutBody>
  </Flyout>
);

const OneButtonTemplate: StoryFn<FlyoutArgs> = (args) => (
  <Flyout {...args}>
    <FlyoutHeader>
      <FlyoutTitle>Offcanvas</FlyoutTitle>
    </FlyoutHeader>
    <FlyoutBody>Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.</FlyoutBody>
    <FlyoutFooter>
      <FlyoutButton type="button" variant="primary" theme="light" label="Button" color="teal" onClick={() => {}}>
        Close
      </FlyoutButton>
    </FlyoutFooter>
  </Flyout>
);

const TwoButtonTemplate: StoryFn<FlyoutArgs> = (args) => (
  <Flyout {...args}>
    <FlyoutHeader>
      <FlyoutTitle>Offcanvas</FlyoutTitle>
    </FlyoutHeader>
    <FlyoutBody>Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.</FlyoutBody>
    <FlyoutFooter>
      <FlyoutButton type="button" variant="tertiary" theme="light" label="Button" color="teal" onClick={() => {}}>
        Close
      </FlyoutButton>
      <FlyoutButton type="button" variant="primary" theme="light" label="Button" color="teal">
        Save
      </FlyoutButton>
    </FlyoutFooter>
  </Flyout>
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  size: 'sm',
  placement: 'start',
};

export const OneButtonStart = OneButtonTemplate.bind({});
OneButtonStart.args = {
  show: true,
  placement: 'start',
};

export const OneButtonEnd = OneButtonTemplate.bind({});
OneButtonEnd.args = {
  show: true,
  placement: 'end',
};

export const TwoButtonStart = TwoButtonTemplate.bind({});
TwoButtonStart.args = {
  show: true,
  placement: 'start',
};

export const TwoButtonEnd = TwoButtonTemplate.bind({});
TwoButtonEnd.args = {
  show: true,
  placement: 'end',
};
