const User = require("../models/blogModel")
const Blog = require("../models/blogModel")


exports.toggleUserShortlist = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id)
    user.shortlisted = !user.shortlisted;
    await user.save({validateBeforeSave:false})

    res.status(200).json({
        success:true,
        user
    })
}

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

exports.getShortlistedUsers = async (req, res)=>{

    const users = await User.find();

    const shortlistedUsers = []
    users.map((user)=>{
        if(user.shortlisted===true){
            shortlistedUsers.push(user);
        }
    })

    res.status(200).json({
        success:true,
        shortlistedUsers
    });
}