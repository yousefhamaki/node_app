const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.write("hello world!")
    res.end()
})

app.listen(5000)