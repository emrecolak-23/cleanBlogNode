const express = require('express');
const mongoose = require('mongoose')
const methodOverride = require('method-override');

// Controllers
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');
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
app.use(methodOverride('_method',{
  methods: ['GET','POST']
}))

app.get("/", postController.getAllPosts)
app.get("/post/:id", postController.getPostById)
app.post("/post", postController.createPost)
app.put("/post/:id", postController.updatePost)
app.delete("/post/:id", postController.deletePost)

app.get("/about", pageController.getAboutPage )

app.get("/post", (req,resp) =>{
  resp.render('post');
})

app.get("/add-post", pageController.getAddPostPage)

app.get("/post/edit/:id", pageController.getUpdatePage)


