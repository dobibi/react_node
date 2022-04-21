const express = require('express')
const app = express()
const port = 7000
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//application/x-www-form-urlencoded -> 방식을 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
//application/json -> 방식을 분석해서 가져옴
app.use(bodyParser.json());

mongoose.connect('').then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err)) 


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/register', (req, res) => {
  //정보를 client에서 가져오면 ->db로 넣어줌

  //req.body : json type
  const user = new User(req.body);
 
  //save -> monogoDB method  -> user model에 저장
  user.save((err, info) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})