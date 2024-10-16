import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Flyout,
  FlyoutHeader,
  FlyoutBody,
  FlyoutFooter,
  FlyoutButton,
  FlyoutTitle,
} from '../../../components/React/Flyout';
import { Dropdown } from '../../../components/React/Input/Dropdown';
import { Input } from '../../../components/React/Input';
import { Logo } from '../../../components/React/Logo';
import '../../../components/Lit/Heading';
import customStyles from './Import.scss?inline';

export default {
  title: 'Pages/InTouch/Import',
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
    },
  },
  tags: ['!autodocs'],
} as Meta;

export const Import: StoryFn = () => (
  <div>
    <style>{customStyles}</style>
    <Flyout
      show
      size="sm"
      placement="end"
      id="import-quote-flyout"
      aria-labelledby="offcanvasLabel"
      scrollable
      backdrop
    >
      <FlyoutHeader>
        <FlyoutTitle>Import</FlyoutTitle>
      </FlyoutHeader>
      <FlyoutBody id="flyout-body">
        <p className="pt-3 mb-4 text-black-100">
          Complete the required fields below to import new quotes.
        </p>
        <div className="layout-container">
          <div className="form-elements">
            <div className="dropdown-group">
              <Dropdown
                id="dropdown"
                required
                options={['Option 1', 'Option 2', 'Option 3']}
              >Vendor</Dropdown>
              <Dropdown
                id="dropdown-1"
                required
                size={100}
                options={['Red', 'Blue', 'Green', 'Yellow', 'Purple']}
              >Vendor program</Dropdown>
            </div>
            <Input type="file" />
          </div>
        </div>
      </FlyoutBody>
      <FlyoutFooter>
        <FlyoutButton
          disabled
          type="button"
          variant="primary"
          theme="light"
          label="Button"
          color="teal"
        >
          Import
        </FlyoutButton>
      </FlyoutFooter>
    </Flyout>
  </div>
);
