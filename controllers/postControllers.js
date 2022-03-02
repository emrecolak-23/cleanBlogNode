const Post = require('../models/Posts')

exports.getAllPosts = async (req,resp)=>{
  const posts = await Post.find().sort('-dateCreated');
  resp.render('index', {
    posts
  });
}

exports.getPostById = async (req,resp) =>{
  
  const post = await Post.findById(req.params.id)
  
  resp.render('post', {
    post
  });
}

exports.createPost = async (req,resp) =>{
  
  await Post.create(req.body);
  
  resp.redirect('/');
}

exports.updatePost = async (req,res) => {

  const post = await Post.findOne({_id:req.params.id})

  post.title = req.body.title;
  post.detail = req.body.detail;

  post.save();

  res.redirect(`/post/${req.params.id}`)

}

exports.deletePost = async (req,res) =>{
  
  await Post.findByIdAndRemove(req.params.id)

  res.redirect('/');

}