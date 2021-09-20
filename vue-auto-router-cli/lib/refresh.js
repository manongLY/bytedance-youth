// 读文件列表

// 拼代码 模板渲染的方式
const fs = require('fs')
const handlebars = require('handlebars')
// 00--------- 好多需要 怎么办
const chalk = require('chalk')
module.exports = async () =>{
    // 获取列表
    const list = fs.readdirSync('./src/views')
        .filter(v => v !== 'Home.vue')
        .map(v => ({
            name: v.replace('.vue','').toLowerCase(),
            file: v,
        }))

    // 生成路由定义
    compile({list},'./src/router.js','./template/router.js')
    // 生成菜单
    compile({list},'./src/App.vue','./template/App.vue.hbs')

        /**
         * 
         * 数据定义
         * 目标文件
         * 模板
         */
        function compile(meta, filePath, templatePath) {
            if(fs.existsSync(templatePath)){
                const content = fs.readFileSync(templatePath).toString()
                const result = handlebars.compile(content)(meta)
                fs.writeFileSync(filePath,result)
                console.log(chalk.green{`${filePath}好了`})
            }
        }
}