import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: ["../src/**/*.story.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: './.storybook/vite.config.ts',
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
} as StorybookConfig;
