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
app.get('/courses', (req,res)=>{
    const id = req.query.id;
    const result = courses.find(id)
    res.send(result)
})





app.listen(port)