(async () =>{
    const {MongoClient} = require('mongodb')
    const client = new MongoClient(
        'mongodb://localhost:27017',
        {
            useNewUrlParser: true
        }
    )

    let ret = await client;

    const fruits = db.connection('fruits')
    // 添加
    ret = await fruits.insertOne({
        name: '芒果',
        price: 3.5
    })
    console.log('insert:',ret)
})