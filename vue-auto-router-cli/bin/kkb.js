#!/usr/bin/env node
const program = require('commander')
// 策略模式
program.version(require('../package').version)
program.command('init <name>')
    .description('init project')
    .action(require('../lib/init.js'))
    // views/中增加一个文件 kkb refresh
// program .command('refresh') 
//     .description('refresh routers...') 
//     .action(require('../lib/refresh'))
program.parse(process.argv)



