const { get } = require("lodash")

module.exports = {
    async init(ctx,next){
        // 根据参数 list 找模型
        console.log('取模型：',ctx.params.list)
        const model = ctx.app.$model[ctx.params.list]
        if(model){
            console.log('模型：',model)
            ctx.list = model
            await next()
        }else{
            ctx.body = 'no this model'
        }
    },
    async list(ctx){
        ctx.body = await ctx.list.find({})
    },

    async get(ctx){
        ctx.body = await ctx.list.findOne({_id:ctx.params.id})
    },
    async create(ctx) { 
        const res = await ctx.list.create(ctx.request.body); 
        ctx.body = res; 
    }, 
    async update(ctx) { 
        const res = await ctx.list.updateOne( { _id: ctx.params.id }, ctx.request.body ); 
        ctx.body = res; 
    }, 
    async del(ctx) { 
        const res = await ctx.list.deleteOne({ _id: ctx.params.id }); 
        ctx.body = res; 
    },
}