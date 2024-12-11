const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.use('/api/v1/', require('./routes/api/v1/routes'))
app.use(require('./routes/static'))

const message = `Server active on port ${port}`
app.listen(port, () => console.log(message))