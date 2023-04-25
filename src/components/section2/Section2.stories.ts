import { Meta, StoryObj } from "@storybook/react";
import { Section2 } from "./Section2";

const meta: Meta<typeof Section2> = {
  title: "Components/Section2",

  component: Section2,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Section2>;

export const Default: Story = {};
