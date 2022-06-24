## ly-rename-file

Add prefix or suffix to filename

### Installation

```
npm install ly-rename-file -g
```

### API

1. add config file js (exp: reName.config.js)

  ```
  module.exports = {
    pattern: 'src/**/*.js', // 需要修改后缀或前缀的文件格式
    prefix: true            // true 表示添加前缀, false表示添加后缀
  }

  ```
2. options

  + -n | --name   需要前后缀名称
  + -c | --config 配置文件


### USE

```
ly-rename-file -n *** -c reName.config.js

```


