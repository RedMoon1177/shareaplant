
const Post = require('../models/postModel');
const mongoose = require('mongoose');

// get all posts
const getAllPosts = async (req, res) => {

    const posts = await Post.find().sort({createdAt: -1});
    
    res.status(200).json(posts);
}

// get all posts from a specific user
const getUserPosts = async (req, res) => {

    const posts = await Post.find({ "createdBy.user_id": req.user._id }).sort({createdAt: -1}); // -1: descending order
    
    res.status(200).json(posts);
}


// get a single post
const getOnePost = async (req, res) => {
    
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such post'});
    }

    const post = await Post.findById(id);

    if(!post) {
        return res.status(404).json({error: 'No such post'});
    }
    
    res.status(200).json(post);
}

// create a new post
const createPost = async (req, res) => {
    const {title, description, content, imageUrl} = req.body;

    let emptyFields = [];

    if(!title) {
        emptyFields.push('title');
    }
    if(!description) {
        emptyFields.push('description');
    }
    if(!content) {
        emptyFields.push('content');
    }
    if(!imageUrl) {
        emptyFields.push('imageUrl')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    // add the new document to db
    try {
        const createdBy = {
            "user_id": req.user._id,
            "user_name": req.user.name
        }
        const post = await Post.create({title, description, content, imageUrl, createdBy}); // use Post model to create a new document here
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// delete a post
const deletePost =  async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such post'});
    }

    const post = await Post.findOneAndDelete({_id: id});

    if(!post) {
        return res.status(404).json({error: 'No such post'});
    }
    
    res.status(200).json(post);
}

// update a post
const updatePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such post'});
    }

    const post = await Post.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!post) {
        return res.status(404).json({error: 'No such post'});
    }
    
    res.status(200).json(post);
}


module.exports = {
    createPost,
    getAllPosts,
    getUserPosts,
    getOnePost,
    deletePost,
    updatePost
}