const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("HELLO FROM HEROKU")
})


app.listen(3000)