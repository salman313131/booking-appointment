const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const tasks = require('./routes/tasks')

const app = express()
app.use(cors())
const sequelize = require('./utils/database')

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

app.use('/api/v1/task',tasks)

sequelize.sync().then(res=>{
    app.listen(3000)
}).catch(err=>console.log(err))