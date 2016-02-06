const express = require('express')
const path = require('path')
const compression = require('compression')
const logger = require('morgan')

// For forcing SSL on Heroku
function sslRedirect(req, res, next) {
  if (process.env.NODE_ENV !== 'production')
    return next()

  // Check `x-forwarded-proto` header set by Heroku
  const forwardedProto = req.headers['x-forwarded-proto']
  const notHTTPS = forwardedProto && forwardedProto !== 'https'

  if (notHTTPS) {
    const url = path.join(req.get('Host'), req.url)
    res.redirect(`https://${url}`)
    return
  }

  next()
}

const app = express()

app.use(logger('dev'))
app.use(sslRedirect)
app.use(compression());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 1000 * 60 * 60 * 24 * 7 }))

app.get('*', (req, res) => {
  const fileURL = path.join(__dirname, 'public', 'index.html')
  res.sendFile(fileURL)
})

module.exports = app