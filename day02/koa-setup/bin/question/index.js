// 视图
import inquirer from 'inquirer'
// 获取输入内容
export function question(){
    return  inquirer.prompt([
        {
            // 输入内容
            type: "input",
            name:"packageName",
            message:"set package name"
        },{
            // 输入内容
            type: "number",
            name: "port",
            message: "set port number",
            default: ()=> 8080
        },{
            type: "checkbox",
            name: "middleware",
            choices:[
                {
                    name: "koaStatic"
                },{
                    name:"koaRouter"
                }
            ]
        }
    ]);
}
