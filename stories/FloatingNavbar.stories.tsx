import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import FloatingNavbar from "../components/FloatingNavbar";

export default {
  title: "Components/FloatingNavbar",
  component: FloatingNavbar,
} as Meta;

const Template: StoryFn = (args: any) => <FloatingNavbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Visible = Template.bind({});
Visible.args = {};
Visible.parameters = {
  backgrounds: { default: "dark" },
};
Visible.decorators = [
  (Story: StoryFn) => (
    <div style={{ paddingTop: "100px" }}>
      <Story />
    </div>
  ),
];
