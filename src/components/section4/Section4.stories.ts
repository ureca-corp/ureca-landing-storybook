import { Meta, StoryObj } from "@storybook/react";
import { Section4 } from "./Section4";

const meta: Meta<typeof Section4> = {
  title: "Components/Section4",

  component: Section4,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Section4>;

export const Default: Story = {};
