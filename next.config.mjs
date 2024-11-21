/**
 * @type {import('next').NextConfig}
 */
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      buildDependencies: {
        config: [__filename], // Gunakan __filename untuk cache dependensi
      },
      compression: "gzip",
    };
    return config;
  },
};

export default nextConfig;
