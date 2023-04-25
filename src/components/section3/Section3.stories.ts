import { Meta, StoryObj } from "@storybook/react";
import { Section3 } from "./Section3";

const meta: Meta<typeof Section3> = {
  title: "Components/Section3",

  component: Section3,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Section3>;

export const Default: Story = {};
