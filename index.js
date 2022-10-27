const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000;


app.use(cors())

const courses = require('./data/courses.json')

app.get('/', (req,res)=>{
    res.send('server is running')
})
app.get('/courses', (req,res)=>{
    res.send(courses)
})




app.listen(port)