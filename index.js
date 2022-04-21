const express = require('express')
const app = express()
const port = 7000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://wwwpyk:0722@wwwpyk.7lopm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err)) 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})