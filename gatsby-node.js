'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
    isolatedModules: false,
  }
});
require("./src/__generated__/gatsby-types");
exports.createPages = require('./gatsby-node/index').createPages;
