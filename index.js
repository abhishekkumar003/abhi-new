const express = require('express');

const app = express();

const PORT = process.env.PORT || 5001;

app.get('/', (req,res)=>{
    res.send("Hi Kumar");
    // res.send("Kaise Ho !!");
})

app.get('/about', (req,res)=>{
    res.send("bubebfo2beu43fbubu2bfuibebfb3f9b9u3b4bfceeifbi20f234fib34fbu43fbub4uefbub4ubf");
})

app.get('/call', (req,res)=>{
    res.send("<h1>Abhishek Kumar </h1>");
})


app.listen(PORT, ()=>{
    console.log(`Server running on PORT NO : ${PORT}`);
})