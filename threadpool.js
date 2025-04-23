const crypto = require('crypto')


const start = Date.now()

const OS = require('os')
console.log(OS.cpus().length)

// process.env.UV_THREADPOOL_SIZE = 8 increase thread pool size - By default is 4

crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', ()=>{
    console.log('password 1 done1', Date.now() - start)
    console.log
})
crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', ()=>{
    console.log('password 2 done1', Date.now() - start)
})
crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', ()=>{
    console.log('password 3 done1', Date.now() - start)
})
crypto.pbkdf2('password4', 'salt1', 100000, 1024, 'sha512', ()=>{
    console.log('password 4 done1', Date.now() - start)
})
crypto.pbkdf2('password5', 'salt1', 100000, 1024, 'sha512', ()=>{
    console.log('password 5 done1', Date.now() - start)
})
crypto.pbkdf2('password6', 'salt1', 100000, 1024, 'sha512', ()=>{
    console.log('password 6 done1', Date.now() - start)
})

/*  password 2 done1 1593
    password 3 done1 1606
    password 4 done1 1607
    password 1 done1 1608
    password 5 done1 2761
    password 6 done1 2772
*/

