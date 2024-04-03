const express = require('express')
const runGeminiPro = require('../gemini-pro');
const runGeminiProVision = require('../gemini-pro-vision')

const promptRouter = express.Router();

promptRouter.post('/text',async(req,res)=>{
    const {prompt} = req.body;
    const result = await runGeminiPro(prompt);
    return res.send(result)
})

module.exports = promptRouter;