/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'cdn-kkdpf.nitrocdn.com',
          port: '',
          pathname: '/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/**'
        }]
      },
      webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          })
        );
        return config;
      },
    // "output": "export"
};

export default nextConfig;
