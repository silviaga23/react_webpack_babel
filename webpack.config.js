const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'React Boilerplate',
    template: './src/index.html'
  })],
  devtool: 'source-map',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [ "@babel/plugin-proposal-class-properties", 'react-hot-loader/babel' ]
        }
      }, {
        test: /\.css$/,
        use: [
          "style-loader", "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: './dist'
  }
}

module.exports = config;