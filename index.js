#!/usr/bin/env node

const { program } = require('commander')
const pkg = require('../package.json')
const { reName } = require('../dist/main.js')

program
  .name(pkg.name)
  .description(pkg.description)
  .version(pkg.version)

// --help显示
program
  .option('-n, --name <fixName>', '需要添加的前后缀名称') 
  .option('-c, --config <fileName>', '配置文件') // 使用尖括号括的返回的参数值可以不是布尔值
  .action(reName)


program.parse(process.argv) // 参数解析完会执行action、

