/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    async redirects() {
    return [
      {
        source: '/:path*',        
        has: [
          {
            type: 'host',
            value: 'haloubi-reda.clarodigi.com'
          }
        ],
        destination: 'https://redahaloubi.com/:path*',
        permanent: true,            
      },
    ]
  },
};

export default config;
