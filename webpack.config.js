var path = require('path');
module.exports = {
  entry: ['./main.js'],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
 },
 module: {
 	rules: [
 		{
 			loader: 'babel-loader',
 			test: /\.js$/,
 			exclude: /node_modules/
 		}
 	]
 }
}