import { Meta, StoryObj } from "@storybook/react";
import { Section5 } from "./Section5";

const meta: Meta<typeof Section5> = {
  title: "Components/Section5",

  component: Section5,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Section5>;

export const Default: Story = {};
