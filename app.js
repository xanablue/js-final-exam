const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())

//routes here


const message = `Server active on port ${port}`
app.listen(port, () => console.log(message))