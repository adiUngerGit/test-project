import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../Components/Button';
// Button.stories.tsx


// Meta configuration for Storybook
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'select',
      options: ['long', 'short', 'none-bg'],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const LongButton = Template.bind({});
LongButton.args = {
  label: 'Long Button',
  type: 'long',
};

export const ShortButton = Template.bind({});
ShortButton.args = {
  label: 'Short Button',
  type: 'short',
};

export const NoneBgButton = Template.bind({});
NoneBgButton.args = {
  label: 'No Background',
  type: 'none-bg',
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: 'Default Button',
};
