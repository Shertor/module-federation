const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfePlugins",

  exposes: {
    './Plugin1': './projects/mfe-plugins/src/app/plugin1/plugin1.component.ts',
    './Plugin2': './projects/mfe-plugins/src/app/plugin2/plugin2.component.ts',
    './Plugin3': './projects/mfe-plugins/src/app/plugin3/plugin3.component.ts',
    './Plugin4': './projects/mfe-plugins/src/app/plugin4/plugin4.component.ts',
    './Plugin5': './projects/mfe-plugins/src/app/plugin5/plugin5.component.ts'
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
  sharedMappings: ["@shared"],
});
