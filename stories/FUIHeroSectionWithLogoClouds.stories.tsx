import React from 'react';
import { Meta, Story } from '@storybook/react';
import FUIHeroSectionWithLogoClouds from '../components/FUIHeroSectionWithLogoClouds';

export default {
  title: 'Components/FUIHeroSectionWithLogoClouds',
  component: FUIHeroSectionWithLogoClouds,
} as Meta;

const Template: Story = (args) => <FUIHeroSectionWithLogoClouds {...args} />;

export const Default = Template.bind({});
Default.args = {};