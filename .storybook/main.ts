import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: ["../src/**/*.story.@(ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: './.storybook/vite.config.ts',
      },
    },
  }
} as StorybookConfig;
