const app = require('./server')

const port = process.env.PORT || 8000

app.listen(port, () =>
  console.log('Server started at port %d', port)
)