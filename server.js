'use strict';

const fs = require('fs');
const path = require('path');
const { createStrapi } = require('@strapi/strapi');

async function startServer() {
  const appDir = __dirname;
  let distDir = path.join(appDir, 'dist');

  // Verify that the compiled TypeScript distribution directory exists
  if (!fs.existsSync(distDir) || !fs.existsSync(path.join(distDir, 'src', 'index.js'))) {
    try {
      const tsUtils = require('@strapi/typescript-utils');
      distDir = await tsUtils.resolveOutDir(appDir);
    } catch {
      distDir = appDir;
    }
  }

  const app = createStrapi({
    appDir,
    distDir,
  });

  await app.start();
}

startServer().catch((error) => {
  console.error('[server.js] Failed to start Strapi application:', error);
  process.exit(1);
});
