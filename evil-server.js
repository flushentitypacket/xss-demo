const express = require('express')
const app = express()
const port = 8001

app.get('/', (req, res) => {
  console.log(req.query)
  res.redirect('http://example.com')
})

app.listen(port, () => console.log(`Evil app listening on port ${port}!`))