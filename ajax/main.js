// 启动服务器
const http=require('http');
// 读取脚本文件
const fs=require('fs');
// const indexF=11le=fs.createReadStream('./index.html');
// 创建一个web服务器
const server=http.createServer((req,res)=>{//req请求对象
    if(req.url=='/'){
        const indexFile=fs.createReadStream('./index.html');
        // http响应头
        res.writeHead(200,{'Content-Type':'textml;charset=utf8'})
        // 会不断刷新
        indexFile.pipe(res)
    }else if(req.url=="/info"){
        // api 后端
        const info={
            "username":"曾凯",
            "desc":"身骑白马"
        };
        // charset=utf8避免显示乱码
        res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf8'
        })
        res.end(JSON.stringify(info));
    }
    // 请求返回
    // res.end('hello world,你要的反正不是首页');
})

server.listen(8088);
