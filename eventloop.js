const fs = require('fs')

setTimeout(() => console.log('setTimeout 0 called ====='), 0) // 2
setTimeout(() => console.log('setTimeout 1 again called ====='), 1) // 3
setImmediate(() => console.log('setImmediate called =====')) // 4
fs.readFile('sample.txt', 'utf-8', () => { 
    console.log('Hello from file') // 5
    setImmediate(() => console.log('setImmediate 2 inner called =====')) // 6
    setTimeout(() => console.log('setTimeout 1 inner  called ====='), 0) // 7  
    setTimeout(() => console.log('setTimeout 2 inner  called ====='), 2000)  // 12

    fs.readFile('sample.txt', 'utf-8', () => {
        console.log('Hello from file 2') // 8
        setImmediate(() => console.log('setImmediate 3 inner called =====')) // 9
        setTimeout(() => console.log('setTimeout 3 inner  called ====='), 0)  // 10
        setTimeout(() => console.log('setTimeout 3 inner  called ====='), 2000) // 11
    
    
    })


})
console.log('hello from top level called ') // 1


// init project
// top level code
// require module
// event callback register
// start event loop


/* Event loop */

// expired timer
// io polling - fs
// set immediate callback
// close callback
// any pending task? (if yes then start even loop again else finish)


