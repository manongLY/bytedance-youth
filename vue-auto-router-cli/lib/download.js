// const ora = import 'ora';
// import ora from 'ora'

const {promisify} = require('util')
module.exports.clone = async function(repo, desc){
    const download = promisify(require('download-git-repo'))
    // const ora = import('ora')
    // 显示进度条
    // const process = ora('下载....${repo}')
    // await process.start()
    await download(repo, desc)
    // await download(repo, desc, function (err) {
    //     console.log(err ? err : 'git repo download Success')
    //   })
    // process.succeed()

}