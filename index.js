require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const questions = require('./utils/questions')
const PORT = process.env.PORT || 3000;

console.log(questions)
app.use(cors());
app.get('/questions',(req,res)=>{
    res.send(questions)
})


app.listen(PORT, () => {

    console.log(`Example app listening at http://localhost:${PORT}`)
})