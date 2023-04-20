import type { StorybookConfig } from "@storybook/nextjs";
const storyBookConfig: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],

  babel: async (options: any) => {
    options.presets.push("@emotion/babel-preset-css-prop");
    return options;
  },
};
export default storyBookConfig;
