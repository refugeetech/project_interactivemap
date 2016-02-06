const path = require('path')
const express = require('express')
const webpack = require('webpack')
const history = require('connect-history-api-fallback')
const config = require('./webpack.dev.config')

const app = express()
const compiler = webpack(config)

const webpackDevMiddlewareConfig = {
  noInfo: true,
  publicPath: config.output.publicPath
}

app.use(history())
app.use(require('webpack-dev-middleware')(compiler, webpackDevMiddlewareConfig))
app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static(path.join(__dirname, 'app')))

const port = process.env.PORT || 8000

app.listen(port, 'localhost', error => {
  if (error) {
    console.log(error)
    return
  }

  console.log(`Listening at http://localhost:${port}`)
})