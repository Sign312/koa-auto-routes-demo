let Router = require('koa-router')

let router = new Router()

router.get('/test', function* (next) {
    this.body = 'product/name/test'
    yield next
})

module.exports = router