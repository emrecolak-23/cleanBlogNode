const express = require('express');
const mongoose = require('mongoose')
const Post = require('./models/Posts')


const app = express();

// Template Engine
app.set("view engine","ejs");

// Connect DB
const dbURI = "mongodb+srv://emco:emco3232@nodetuts.iuulr.mongodb.net/cleanblog-test-db?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{ 
  // declare port number
  const PORT = 3000;
  // listen for request
  app.listen(PORT);} )
.catch((err)=>{ console.log(err); })

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req,resp)=>{
  const posts = await Post.find();
  resp.render('index', {
    posts
  });
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

app.post("/post", async (req,resp) =>{
  
  await Post.create(req.body);
  
  resp.redirect('/');
})


