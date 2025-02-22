// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import preact from '@astrojs/preact';

import db from '@astrojs/db';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    preact({
      include: ["**/preact/*"],
    }),
    db(),
    react({
      include: ["**/react/*"],
    }),
  ],
  // output: "server",

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});