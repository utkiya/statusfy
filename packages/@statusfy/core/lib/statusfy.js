const createApp = require("../server/app");
const generateConfig = require("./config/generate");

module.exports = async function Statufy(sourceDir, port, host) {
  // Generate configuration
  const { nuxtConfig, siteConfig } = generateConfig(sourceDir, { host, port });

  // Create app
  const app = await createApp(siteConfig, nuxtConfig, host, port);

  return app;
};
