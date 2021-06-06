const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.alias["@emotion/core"] = toPath("node_modules/@emotion/react")
    config.resolve.alias["emotion-theming"] = toPath("node_modules/@emotion/react")

    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  },
};
