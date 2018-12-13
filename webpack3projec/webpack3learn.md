# webpack3

* 常用插件 UglifyjsWebpackPlugin 压缩，CommonsChunkPlugin 抽取公共，ModuleConcatenationPlugin  scope hosting，NoEmitOnErrorsPlugin ,ExtractTextWebpackPlugin 分离如css等文件
* entry output module plugin
* tree shaking  ：Tree-shaking 概念最早由Rollup.js 提出，后来在webpack2中被引入进来，但是这个这一特性能够被支持得益于ES6 modules的静态特性。ES6的模块声明相比于传统CommonJS的同步require有着本质区别。这种modules设计保证了依赖关系是提前确定的，使得静态分析成为了可能，与运行时无关。   **如果使用babel的话，需要关闭babel的modules配置** 

``` javascript
{
    "presets": [
        [
            "env",
            {
              "modules": false
            }
          ]
    ]
}
```





---

https://www.cnblogs.com/imwtr/p/7801973.html

https://www.css88.com/archives/7661

http://www.cnblogs.com/hezihao/p/8072750.html