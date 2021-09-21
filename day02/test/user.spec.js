const User = require('./User')

test("should getName",()=>{
    // 测试数据  given
    const user = new User("qiang");
    // 触发测试动作 when
    user.setName("xiao");
    // 验证 then
    expect(user.getName()).toBe('xiao');

})