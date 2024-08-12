import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the footer',
    },
    textColor: {
      control: 'color',
      description: 'Text color in the footer',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#f0f0f0',
    textColor: '#333333',
  },
  render: (args) => (
    <div style={{ backgroundColor: args.backgroundColor, color: args.textColor }}>
      <Footer />
    </div>
  ),
};