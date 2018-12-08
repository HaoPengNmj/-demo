# babel

## 笔记

1. 严格模式 “use strict”
2. 风格检测 lint 
3. polyfill  和 shim  垫片 用旧版本代码 实现 新的api



## babel

``` bash
$ npm install --save-dev babel-cli 

$ npm install --save-dev babel-preset-es2015

# 最新转码规则
$ npm install --save-dev babel-preset-latest

# react 转码规则
$ npm install --save-dev babel-preset-react

# 不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```

cli 不装在全局  就得用npm run执行

新建配置文件.babelrc

``` javascript
{
    "preset":[
        "es2015",
        "lastest",
        "react",
        "stage-2"
    ],
    "plugins":[]
}
```

babel命令

``` bash
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```

