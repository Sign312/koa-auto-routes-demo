let Router = require('koa-router')

let router = new Router()

router.get('/hello', function* (next) {
    this.body = '/admin/hello'
    yield next
})

router.get('/', function* (next) {
    this.body = '/admin'
    yield next
})

module.exports = router