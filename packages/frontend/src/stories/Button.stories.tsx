import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../Components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  primary: false,
};

export const Clickable = Template.bind({});
Clickable.args = {
  label: 'Click Me!',
  primary: true,
};

export const blue = Template.bind({})

blue.args = {
  label: 'Blue Button',
  primary: true,
}