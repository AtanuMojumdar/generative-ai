require('dotenv').config()
const express = require('express')
const promptRouter = require('./routes/promptRoute.js')

const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.use('/v1/prompt',promptRouter);


app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})