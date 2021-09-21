const foo = require('./foo')
const add = require('./add')
// mock
jest.mock('./add.js',()=>{

    return jest.fn();
})
test("should 1+1 = 2",()=>{
    // 测试数据  given
    foo();
    // 触发测试动作 when
    // 验证 then
    execpt(add).toHaveBenCall();

})