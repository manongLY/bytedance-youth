// 问题驱动
// 开发思想 - 小步骤的开发思想
import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
// 格式化代码
import prettier from 'prettier'

export function createIndexTemplate(config){
    const __dirname = path.resolve(fileURLToPath(import.meta.url));
    console.log('__dirname:',__dirname)
    console.log('path:',path.resolve(__dirname,"./template/index.ejs"))

    const template = fs.readFileSync(path.resolve(__dirname,"./template/index.ejs"), "utf-8");
    const code = ejs.render(template,{
        router: config.middleware.router,
        static: config.middleware.static,
        port: config.port
    });
    // 格式化代码 美化代码
    return prettier.format(code,{
        parser: "babel"
    })
}