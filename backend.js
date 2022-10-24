const express = require('express')
const app = express()

app.get('/signup', (req,res)=>{
    console.log("app is connected")
})

app.post('/signup', (req, res)=>{
    console.log(req.body)
})

app.listen(4000, ()=>{
    console.log('App is listing on port 3000')
})