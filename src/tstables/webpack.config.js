const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'ts-tables.js',
    path: path.resolve(__dirname, '../dist'),
    library: {
      name: 'tables',
      type: 'umd',
    },
  },
};
