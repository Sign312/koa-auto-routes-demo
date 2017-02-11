let Router = require('koa-router')

let router = new Router()

router.get('/', function* (next) {
    this.body = 'hello'
    yield next
})

module.exports = router