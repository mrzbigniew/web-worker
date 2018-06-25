const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, config) => {
  const isDev = config.mode === 'development';

  return {
    mode: isDev ? 'development' : 'production',
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Webworker sample project',
        filename: 'index.html',
      })
    ],
    entry: {
      main: './src/index.ts'
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: ["node_modules"]
    },
    output: {
      filename: '[name].[chunkhash:4].js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      index: 'index.html'
    }
  }
};
