import type { Core } from '@strapi/strapi';

export default ({ env }: Core.Config.Shared.ConfigParams) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', env('STRAPI_URL', 'http://localhost:1337')),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  dirs: {
    public: env('STRAPI_PUBLIC_DIR', './public'),
  },
});
