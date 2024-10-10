import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Title from '../Components/Title'; 

// Meta configuration for the story
export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    title: { control: 'text' }, 
  },
} as Meta;

const Template: StoryFn = (args) => <Title title={''} {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Default Title',
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Input Title',
};
