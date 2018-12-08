# babel7

``` bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

babel 本身只是会转化语法    对于新的api  方法 属性  等是不转化的

若要兼容  就用 ployfill

但是  [@babel/polyfill](https://babel.docschina.org/docs/en/babel-polyfill) 模块包括 [core-js](https://github.com/zloirock/core-js) 和自定义 [regenerator runtime](https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js) 来模拟完整的 ES2015+ 环境。 即@babel/polyfill 包含所有新的api等 的兼容写法  。有时项目不是全部都用就没必要全引入 

``` json
{
    "presets":[
        ["@babel/env",{"useBuiltIns":"usage"}]
    ],
    "plugins": [
        
    ]
}
```

**{"useBuiltIns":"usage"} ** 会帮你按需引入 polyfill 里面你用到的包

**但是有个问题 转换出来 也只是 把import,export转成各种规范的模块格式如：require()  ，浏览器不能直接用    要配合打包工具如webpack打包。（也可先引入模块化script标签）** 

老版本也是要用polyfill的





参考

---

https://mp.weixin.qq.com/s/AURDiWwspdfRExopNf4YLQ

https://babel.docschina.org/docs/en/usage