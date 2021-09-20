// 欢迎界面
const {promisify} =  require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.yellow(content))
const {clone} = require('./download')
const open = require('open')
// 兼容
const spawn = async(...args) =>{
    // 同步Promise api
    const {spawn} = require('child_process')
    // 
    const options = args[args.length - 1]
    console.log('platform:',process.platform)
    if(process.platform === 'win32'){
        // 设置 shell 选项为 true 以隐式地调用 cmd 
        options.shell = true
    }else {
        // nothing
    }
    return new Promise(resolve =>{
        const proc = spawn(...args)
        console.log('============')
        // 输出流 子进程 合并到主进程
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', ()=>{
            console.log('---close---')

            // 异常处理，输出
            resolve()
        })
    })
}

module.exports = async name =>{
    // 欢迎界面
    clear()
    const data = await figlet('winter yyds!','Ghost');
    log(data)

    // 项目模板
    log('创建项目' + name)
    // await clone('github:su37josephxia/vue-template',name)

    // 下载依赖
    // 子进程
    log(`✈✈✈  安装依赖...`)
    // await spawn('npm',['install'],{cwd:`./${name}`})
    log(chalk.yellow(`
    🆗 下载完成
    ===============
    cd ${name}
    npm run serve
    ===============
    `))

    // 自动打开
    open('http://localhost:8080')
    await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}
