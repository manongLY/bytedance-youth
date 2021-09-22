#!/uer

// 使用esm
// "type": "module",
// inquirer 视图

import fs from "fs";
import {createIndexTemplate} from './indexTemplate.js';
import {createPackageTemplate} from './packageTemplate.js';
import {createConfig} from './config.js'
import path from 'path';
import {question} from './question/index.js';
// cli 执行命令，代替子进程 spawn
import exec from 'exec';
const answer = await question();
console.log('answer:',answer)
// 核心：自动化思维'


const config = createConfig(answer)
console.log('config:',config)

// 1、创建文件夹
fs.mkdirSync(getRootPath());
// 2、创建index.js
fs.writeFileSync(getRootPath() + "/index.js",createIndexTemplate(config))
// 3、创建 package.json
// 练习：基于数据生成 package.json
fs.writeFileSync(getRootPath() + "/package.json",createPackageTemplate(config))

// 4、安装依赖
// TODO package -> yarn
// 代替 子进程 spwan
exec("yarn",{
    cwd: getRootPath(),
    // 进度
    stdio: [2,2,2]
})
function getRootPath(){
    // 相对路径
    return path.resolve(process.cwd(),config.packageName)
}