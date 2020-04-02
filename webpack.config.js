const path = require('path');

module.exports = {
  entry: {
    main: [
      './src/main.jsx',
      './src/main.css'
    ]
  },

  output: {
    filename: 'bungle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node-modules/, // Исключаем из обработки папку node-modules
        loader: 'babel-loader', // Опеределяем загрузчик
        options: {
          presets:["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 8000,
    disableHostCheck: true,
    hotOnly: true,
    historyApiFallback: true,
  },
};

