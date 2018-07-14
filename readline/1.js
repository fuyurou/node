const readline = require('readline')

//process 全局的，不需要引入就可使用  命令行提供stdin  createInterface API 
const rl = readline.createInterface({//创建一个交互的接口  input战斗的地方
    input: process.stdin,   // process node.js 核心模块进程  可以源源不断读取用户的信息 
    output: process.stdout
}) ;

rl.question('please input a word:',function(answer){
    console.log('Your has entered [%s]', answer.toUpperCase());// [%s] 占位符 需要接受一个参数去替换
    rl.close();//用完关闭
}) 
