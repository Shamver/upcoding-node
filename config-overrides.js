const {
  addDecoratorsLegacy,
  disableEsLint,
  addBabelPlugin,
  override,
} = require('customize-cra');

module.exports = override(
  disableEsLint(),
  addDecoratorsLegacy(),
  addBabelPlugin('@babel/plugin-syntax-dynamic-import'),
);
