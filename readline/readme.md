1 询问question 的需求
fs 模块读取文件 
readfileString 可读流 可写流 pop截一下
在命令行形成一个对话

const readline = require('readline')

//process 全局的，不需要引入就可使用  命令行提供stdin  createInterface API 
const rl = readline. ({//创建一个交互的接口  input战斗的地方
    input: process.stdin,   // process node.js 核心模块进程  可以源源不断读取用户的信息 
    output: process.stdout
}) ;

rl.question('please input a word:',function(answer){// question API 为解决问题而来的
    console.log('Your has entered [%s]', answer.toUpperCase());// [%s] 占位符 需要接受一个参数去替换
    rl.close();
}) 给你抛出一个问题，等你输入，不输就等着  Interface在为你服务
createInterface 就像给一个实例

命令行输入 node 1.js 输问题 回车 回答


2 日志分析 用户 服务器 mysql

用户访问日志

前端navigation 浏览器 内核 log文件 readline的第二应用场景 得到时间 访问页面地址 readline逐行读取 实现按行读取 

3 不会的tab键会提醒
 来自命令行的输入

给一个提示 prompt 补全 completer

数组里的方法map reduce 

递归条件 数组长度为0

