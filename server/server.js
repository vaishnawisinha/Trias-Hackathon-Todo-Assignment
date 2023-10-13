const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', (req,res) => {

    res.send("List of all tasks")
}) 

app.post('/addtasks', (req,res) => {
    console.log(req.body)
    const ADD_QUERY = `insert into todotaskmanager.tasks (task) values ('${req.body.task}')`
    // res.send("Add tasks")
    connection.query(ADD_QUERY, (err) => {
        if(err) console.log(err)
        else res.send('Task has been')
    })
}) 

app.get('/deletetasks', (req,res) => {
    res.send("Delete tasks")
}) 

app.listen(4000, () => {
    console.log("running on port 4000")
})