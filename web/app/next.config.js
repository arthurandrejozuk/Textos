const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@art/default','@art/images']);

module.exports = withPlugins([withTM]);