var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname)
var BUILD_PATH = path.resolve(ROOT_PATH,'dist');
var APP_PATH = path.resolve(ROOT_PATH,'src');

console.log(module)
module.exports = {
    entry : {
        app : path.resolve(APP_PATH,'index.jsx')
    },
    output : {
        path : path.resolve(BUILD_PATH),
        filename : 'js/bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: [APP_PATH]
            },
            {
                test:/\.(css|less)$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx','.css']
    },
    //启动dev source map，出错以后就会采用source-map的形式直接显示你出错代码的位置。
    devtool: 'eval-source-map',
    plugins:[
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'myTest',
            // filename:'my_index.html',
            template:ROOT_PATH+'/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        port:9000,
        hot:true,
    },

  
}