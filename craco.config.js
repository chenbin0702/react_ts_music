const path = require('path');
const CracoLessPlugin = require('craco-less');
const reslove = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      '@': reslove('src')
    },
  
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
