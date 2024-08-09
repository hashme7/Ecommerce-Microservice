const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:"shoppping service"})
})


app.listen(8001,()=>{
    console.log(`shopping service is running on http://localhost:8001`)
})