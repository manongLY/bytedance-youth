const add = require('./add')

test("should 1+1 = 2",()=>{
    // 测试数据  given
    const a = 1;
    const b = 1;
    // 触发测试动作 when
    const r = add(a,b)
    // 验证 then
    expect(r).toBe(2);

})