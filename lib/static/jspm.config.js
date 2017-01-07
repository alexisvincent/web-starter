SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "app/": "/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.18"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "web-starter": {
      "main": "web-starter.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
