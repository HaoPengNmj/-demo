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
9. 