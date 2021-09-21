const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa();

app.use((ctx)=>{
    const url = ctx.request.url;
    console.log(url);

    if(url === '/'){
        // 加载html
        fs.body = fs.readFileSync("./index.html","utf-8")
    }else if(url.endsWith(".js")){
        // 找到对应路径 加载 给浏览器
        const p = path.resolve(__dirname,url.slice(1))

        ctx.type = "text/javascript";
        // 做一个标识 如果是 import * from 'vue' -> node_modules
        const source = fs.readFileSync(p, "utf-8")
        ctx.body = rewiteImport(source)
    }else if(url.startsWith("/@modules")){
        // 去node_modules取
        const moduleName = url.replace("/@modules","")
        // url -> vue
        // const prefix = path.resolve(__dirname,"./node_modules",moduleName)
        const prefix = __dirname + "/node_modules/" +moduleName;
        // package.json
        const module = require(prefix + "/package.sjon").module;
        console.log(module)

        const code = fs.readFileSync(path.resolve(prefix,module),"utf-8")
        console.log(code)
        ctx.body = rewiteImport(code);
    }
});

function rewiteImport(source){
    return source.replace(/(from\s+["|'])()?![\.\/])/g,"$1/@modules/")
                .replace(/process\.env\.NODE_ENV/g,'"devlopment');
}

app.listen(8080,(ctx)=>{
    console.log('启动： 8080')
})