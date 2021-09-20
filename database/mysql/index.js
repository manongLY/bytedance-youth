(async =>{
    const mysql = require('mysql2/promise')

    // 设置连接配置
    const cfg = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'kaikeba'
    }

    const connection = await mysql.createConnection(cfg)

    const ret = `CREATE TABLE IF NOT EXISTS test (
        id INT NOT NULL AUTO_INCREMENT,
        message VARCHAR(45) NULL,
        PRIMARY KEY (id))`;
    console.log('CREATE:',ret)

    ret = await connection.execute(`INSERT INTO test(message) VALUES(?)`,
    ["ABC"]);
    console.log('insert:',ret)

    // 结果集
    const [rows,fields] = await connection.execute(`SELECT * FROM TEST`)
    console.log('结果集：',rows)
})()


// 异步调用 
// js callback geneter async/awiat 发布订阅