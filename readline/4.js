// 项目名字 版本 作者名字
//3
const readline =require('readline');
const fs = require ('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, //根据输入命令行显示
    prompt: 'OHAI> ' //自动生成
});
const preHint = `
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`;

console.log(preHint);

let defaultAnswers = [ 'name', '1.0.0', 'none' ];//默认回答
let answers = [] //准备结果的回答收集
//
let index = 0;
let questions = [ 'name', 'version', 'author'];
//2
function createPackageJson(){
//5 不能直接写入 json 怎么准备 json 有key value 现在 answers=[]只是value key在question里面 先准备一个json 对象
var map = {};
    questions.forEach(function(question, index){ // 遍历每一项 得到index 
        map[question] = answers[index];
    });

    fs.writeFileSync('./package.json', JSON.stringify(map, null, 4));//写入文件



}
//1
function runQuestionLoop(){
    if(index==questions.length){
        createPackageJson()
        rl.close();//不需要再问了 去做createPackageJson()    createPackageJson()依赖fs模块 要写入文件
        return;
    }
//4 回答问题
let defaultAnswer = defaultAnswers[index];//此处进行了优化，因为多处使用他 还进行了计算
let question = questions[index] + ': (' + defaultAnswer +') '; 

rl.question(question, function(answer){
    answers.push(answer || defaultAnswer);//用户没有输入那么就把默认的放进去 
    index++;//问完之后 接下来问下一个问题
    
    runQuestionLoop();
});

//1
   
}
runQuestionLoop()  //递归启动的地方先注释
