const express = require('express');

const app = express();

const blog = { id: 1, title: "Blog title", description: "Blog description" }

app.get("/", (req,resp)=>{
  resp.send(blog)
})

const PORT = 4000;

app.listen(PORT, ()=>{
  console.log(`Server created in ${PORT} port`)
})