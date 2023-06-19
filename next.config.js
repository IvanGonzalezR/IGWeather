/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: '26857cc1e16a4e2798422927231406'
  },
  // allow image sources
  images: {
    domains: [ 'cdn.weatherapi.com' ],
  },
}

module.exports = nextConfig
