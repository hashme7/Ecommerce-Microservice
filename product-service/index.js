const express = require('express');



const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("product-service")
})

app.listen(8002,()=>{
    console.log("product service is running on port http://localhost:8002");
})