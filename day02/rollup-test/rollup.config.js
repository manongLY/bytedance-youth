// esm
import json from '@rollup/plugin-json';
// 压缩代码
import { terser } from 'rollup-plugin-terser'
// 解析 commonjs
import commonjs from '@rollup/plugin-commonjs'
// 解析node
import nodeResolve from '@rollup/plugin-node-resolve'
import answer from 'the-answer'
console.log(answer)
export default {
    input: "src/main.js",
    output: [{
        file: "dist/bundle.esm.js",
        format: "esm", // 导出规范 cjs -> common.js ; esm
        plugin: terser()
    },{
        file: "dist/bundle.cjs.js",
        format: "cjs"
    }],
    plugins:[
        json(),
        nodeResolve(),
        commonjs()
    ],
    // 不打包
    external:['vue']
}