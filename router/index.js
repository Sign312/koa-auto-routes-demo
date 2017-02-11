let fs = require('fs')
let path = require('path')
let Router = require('koa-router')

let router = new Router()

// 创建读取文件的Promise函数
function readfile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, data) {
            if (!err) {
                resolve(data.toString())
            } else {
                reject(err)
            }
        })
    })
}

// 创建暂停执行的Promise函数
function wait(timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // console.log('wait end')
            resolve()
        }, timeout);
    })
}


// 创建读取文件包装函数
function* test_readfile() {
    try {
        this.body = yield readfile(path.join(__dirname, '../file'))
    } catch (e) {
        console.log(e)
    }
}

router.post('/', function* (next) {
    console.log(this.request.body)
    yield test_readfile.call(this)
    yield next
})

router.get('/', function* (next) {
    console.log(this.request.body)
    yield test_readfile.call(this)
    yield next
})

module.exports = router