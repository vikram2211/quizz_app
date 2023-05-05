const express = require('express');
const app = express();
const {config} = require('dotenv');
app.use(express.json());
config();
const port = process.env.PORT || 8000

app.get('/',(req,res)=>{
    try {
        res.json('get request')
    } catch (error) {
        res.json(error)
    }
})

app.listen(port,()=>{
    console.log(`Server connected to http://localhost:${port}`);
})