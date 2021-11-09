//asynchronous method
const {readFile, writeFile, write, read } = require('fs')

console.log('start');
readFile('./folder/first.txt', 'utf8', 
(err,result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./folder/second.txt','utf8',
    (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        const second = result;
    writeFile(
    './folder/result-sync.txt',
    `Here is the result : ${first}, ${second}`
    ,(err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('Done with this task');
        })
    })
})
console.log("starting next task");