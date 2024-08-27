const Blog = require("../models/blogModel")

exports.createBlog = async (req,res,next)=>{
    const blog = await Blog.create(req.body);

    res.status(201).json({
        success:true,
        blog
    })
}

exports.getAllBlogs = async (req, res)=>{

    const blogs = await Blog.find();

    res.status(200).json({
        success:true,
        blogs
    });
}

exports.getBlog = async (req, res)=>{
  const id = req.params.id;
  const blog = await Blog.findById(id);
  
  res.status(200).json({
    success:true,
    blog
  })
}


exports.deleteBlog = async (req, res)=>{
  const id = req.params.id;
  const blog = await Blog.findByIdAndDelete(id);
  if(!blog){
    res.status(404).json({
      success:false,
      message: "Blog not found"
    });
  }
  else{
    res.status(200).json({
      success:true,
      blog
    })
  }
}
exports.updateBlog = async (req, res)=>{
  const id = req.params.id;
  const updatedBlog = req.body;
  try{
    const blog = await Blog.findByIdAndUpdate(id,updatedBlog,{
      new : true,
      runValidators:true,
    })
    if(!blog){
      return res.status(404).json({
        success:false,
        message:"Blog not foundd",
      })
    }
    res.status(200).json({
      message: "Blogg edited successfully",
      success: true,
      blog,
    });
  }catch(error){
    res.status(400).json({
      success:false,
      message: "Failed to update the blog",
      error: error.message,
    });
  }
};
