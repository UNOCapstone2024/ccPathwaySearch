const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
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
    filename: 'ts-tables-custom.js',
    path: path.resolve(__dirname, '../dist'),
    library: {
      name: 'customTables',
      type: 'umd',
    },
  },
};
