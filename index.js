// const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// loading routes
const mainRouter = require('./mainRouter.js')
const classRouter = require('./classRoutes.js')

// mounting our routers
app.use(mainRouter)
app.use('/class', classRouter)

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
