
const express = require('express')
const app = express()
const port = 3000

app.set('view engin','ejs')
app.get('/', (req, res) => {
  let sidename ="Ashish"
  let seach ="blog"
  res.render("templet.ejs",{sidename:sidename,seach:seach})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})