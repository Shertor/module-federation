const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack")

module.exports = withModuleFederationPlugin({
  name: "mfe-module",

  exposes: {
    "./Module": "./projects/mfe-module/src/app/dashboard/dashboard.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: false,
    }),
  }
})
