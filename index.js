let koa = require('koa')
let cors = require('koa-cors')
let bodyparser = require('koa-bodyparser')
var path = require('path');

let app = koa()

app
    .use(cors())
    .use(bodyparser())

let autoRoutes = require('koa-auto-routes')

autoRoutes(app, path.join(__dirname, 'router'))

app.listen(9999)