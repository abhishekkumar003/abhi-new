const express = require('express');

const app = express();

const PORT = process.env.PORT || 5001;

app.get('/', (req,res)=>{
    res.send("Hi Kumar");
    // res.send("Kaise Ho !!");
})

app.listen(PORT, ()=>{
    console.log(`Server running on PORT NO : ${PORT}`);
})