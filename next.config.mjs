// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["zh-Hant"],
    defaultLocale: "zh-Hant",
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};
export default config;
