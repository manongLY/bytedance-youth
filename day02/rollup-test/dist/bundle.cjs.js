'use strict';

require('');

var name = "我的名字";
var data = {
	name: name
};

function main () {
  console.log(data);
}

// webpack ->esm -> require(自定义)（动态的）分析不出来，
// 只有在 runtime 才能分析

// rollup 分析出代码的信息
// esm -> 静态 ast 解析
// 得到代码信息 -> 数据结构
// 通过数据结构 -> 生成代码
// 天然支持 tree-shaking

module.exports = main;
