const express = require('express');

const app = express();

// Static File
app.use(express.static('public'))

// Template Engine
app.set("view engine","ejs");

app.get("/", (req,resp)=>{
  resp.render('index');
})

app.get("/about", (req,resp) =>{
  resp.render('about');
})

app.get("/post", (req,resp) =>{
  resp.render('post');
})

app.get("/add-post", (req,resp) =>{
  resp.render('add_post');
})

const PORT = 4000;

app.listen(PORT, ()=>{
  console.log(`Server created in ${PORT} port`)
})