# webpack4

参考

---

https://www.cnblogs.com/tugenhua0707/p/9384953.html

https://www.cnblogs.com/imwtr/p/9189670.html

* 几个常用插件 UglifyjsWebpackPlugin，CommonsChunkPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin  被移除
* extract-text-webpack-plugin  --->   mini-css-extract-plugin 



## 官方文档操作

1. 无需config  直接npx webpack 
2. 有config 文件  ，npx webpack --config webpack.config.js 可以指定特定的配置文件，（改名）
3. style css loader  转css
4. css-loader 会解析css中的url，替换为`输 出`目录中图像的最终路径 
5. css 分离用插件  
6. 图片 字体 用 file-loader 
7. 图片再优化    查看 [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) 和 [url-loader](https://www.webpackjs.com/loaders/url-loader)，以了解更多关于如果增强加载处理图片功能。 ？
8. 属性resolve ？
9. 可以多个入口  最终生成多个对应的js
10. html-webpack-plugin 自己生成html  自动插入生成的js，css    https://github.com/jantimon/html-webpack-plugin
11. clean-webpack-plugin  清理dist 中无用文件
12. devtool: 'inline-source-map'  报错会指出具体哪个js文件
13. webpack-dev-server  提供简单服务器  能够实时重新加载 
14. 从 webpack 4 开始，也可以通过 `"mode"` 配置选项轻松切换到压缩输出，只需设置为 `"production"`。 就是自带压缩了  还有tree-shaking  ？
15. sideEffects 副作用   可设置 【】 忽略文件名单
16. webpack.config.js 

``` javascript
const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new htmlwebpackplugin({
            title: 'Output Management'
        })
    ]
};
```

17. webpack-merge   可以分开几个配置文件  按开发生产环境  组合配置信息
18. 代码分离：通过多入口 或 webpack.optimize.CommonsChunkPlugin 或  动态异步import（）