const Post = require('../models/Posts')

exports.getAboutPage = (req,resp) =>{
  resp.render('about');
}

exports.getAddPostPage = (req,resp) =>{
  resp.render('add_post');
}

exports.getUpdatePage = async (req,res)=>{

  const post = await Post.findOne({_id:req.params.id});
  
  res.render('edit',{
    post
  })

}