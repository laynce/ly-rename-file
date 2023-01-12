## ly-rename-file

Add prefix or suffix to filename

### Installation

```js
  npm install ly-rename-file -g
```

### API

1. add configfile js (exp: reName.config.js)
  可选项, 无此配置文件时, 则默认处理root/src下的所有js文件

  ```js
  module.exports = {
    pattern: 'src/**/*.js', // 需要修改后缀或前缀的文件格式
    prefix: true            // true 表示添加前缀, false表示添加后缀
  }

  ```
2. options

  + -n | --name   需要添加的前后缀名称
  + -c | --config 配置文件


### USE

```js
  ly-rename-file -n *** -c reName.config.js

```


