// 问题驱动
// 开发思想 - 小步骤的开发思想
import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
// 格式化代码
import prettier from 'prettier'

export function createPackageTemplate(config){
    const __dirname = path.resolve(fileURLToPath(import.meta.url));
    console.log('__dirname:',__dirname)

    const template = fs.readFileSync(path.resolve(__dirname,"./bin/template/package.ejs", "utf-8"));
    const code = ejs.render(template,{
        packageName: config.packageName,
        router: config.middleware.router,
        static: config.middleware.static
    });
    return prettier.format(code,{
        parser: "json"
    })
}