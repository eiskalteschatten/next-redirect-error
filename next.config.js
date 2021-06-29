require('dotenv').config();
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  trailingSlash: true,
  webpack(config) {
    if (process.env.NODE_ENV === 'development') {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    }
    return config;
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
    domains: [
      {
        domain: process.env.REACT_APP_EN_DOMAIN,
        defaultLocale: 'en',
        http: process.env.NODE_ENV === 'development',
      },
      {
        domain: process.env.REACT_APP_DE_DOMAIN,
        defaultLocale: 'de',
        http: process.env.NODE_ENV === 'development',
      }
    ]
  },
  env: {
    REACT_APP_PROTOCOL: process.env.REACT_APP_PROTOCOL,
    REACT_APP_EN_DOMAIN: process.env.REACT_APP_EN_DOMAIN,
    REACT_APP_DE_DOMAIN: process.env.REACT_APP_DE_DOMAIN
  },
};
