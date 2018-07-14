const readline = require('readline');

const completer =(line)=>{
    // console.log(line); //line到目前已经输入的
    const command = 'npm';
    const subCommands = ['help','init','install'];
    // 小于command 时，line时command 一部分 补全一下
    if(line.length < command.length){
        return [command.indexOf(line) === 0 ? [command] : [], line];
    }

    // npm ＋空格 三个命令都出来， 不熟 悉,建议出来，
    // npm i install  init 不要help
    // 1 拿到filter的一个条件   replace 可以将npm后面的空格干掉
    // 2 从command数组里面 commands 命令filter  filter会返回一个新的数组
    let hits = subCommands.filter(function(subCommand){  //filter 是函数，
        const lineTrippedCommand = line.replace(command, '').trim();
        return lineTrippedCommand && subCommand.indexOf( lineTrippedCommand ) === 0;
    })
    if(hits.length === 1){
        hits = hits.map(function(hit){
            return [command, hit].join(' ');//返回一个数组，第一项
        });
    }
    //匹配多个？ 或者没有匹配到 所有都输出
    return [hits.length ? hits : subCommands, line];

}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer:completer
  });
  
  rl.prompt();