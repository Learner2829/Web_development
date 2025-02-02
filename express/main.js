const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('This is about page!')
  })

  app.get('/about/:slug', (req, res) => {
    res.send(`${req.params.slug}`)
    console.log(req.query)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      