const express = require('express')
const app =  express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const port = process.env.PORT

app.use(cors())


app.get('/', (req, res) => {
    res.send('ddddddddddddddddddddd')
})

app.listen(port, () => {
    console.log('ta rodando')
})
