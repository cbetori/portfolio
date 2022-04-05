const { ModuleFederationPlugin } = require('webpack').container
const { MFLiveReloadPlugin } = require('@module-federation/fmr')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const deps = require('./package.json').dependencies
const web = require('webpack')
const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'
const dotenv = require('dotenv').config({
  path: '../.env',
}).parsed

module.exports = {
  entry: './src/index.js',
  mode,
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    chunkFilename: '[name].[id].js',
    publicPath: prod
      ? 'https://betori.herokuapp.com/'
      : 'http://localhost:3003/',
  },
  devtool: prod ? 'hidden-source-map' : 'hidden-source-map',
  resolve: {
    extensions: ['.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(png|svg|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3003,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'portfolio',
      filename: 'remoteEntry.js',
      exposes: {
        './Portfolio': './src/App.js',
        './ResumeBtn': './src/components/Body/Other/Resume.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new web.DefinePlugin({
      API_URL: prod
        ? JSON.stringify(process.env.API_URL)
        : JSON.stringify(dotenv.API_URL),
    }),
  ],
}
