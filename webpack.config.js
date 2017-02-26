var path = require('path');
const VENDOR_LIBS = [
  'react', 'redux', 'react-redux', 'react-dom'
];
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: {
        app: './index'
    },
    
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js'
        
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: ['babel-loader']
            }
            // {
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
            //     test: /\.css$/
            // }
        ]
    }
    // plugins: [
    //     new ExtractTextPlugin("style.css")
    // ]
}