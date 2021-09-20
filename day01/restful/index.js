const Koa = require('koa')
const app = new Koa()

// 注册路由
const config = require('./config')
const {loadModel} = require('./framework/loader.js')
loadModel(config)(app)

// 
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const restful = require('./framework/router')
const { rest } = require('lodash')
console.log('restful:',restful)
app.use(restful)


app.listen(3000, ()=>{
    console.log('Server at 3000')
})