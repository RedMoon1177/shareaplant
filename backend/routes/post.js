const express = require('express');
const { createPost,
        getAllPosts,
        getUserPosts,
        getMostLikedPosts,
        getOnePost,
        getLatestPost,
        deletePost,
        updatePost } = require('../controllers/postController');
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router();

// define to use middlewares
// router.use(requireAuth)



// GET all posts
router.get('/', getAllPosts);

// GET all posts from the loggedin user
router.get('/loggedin', requireAuth, getUserPosts);

// GET the latest post
router.get('/latest', getLatestPost);

// GET a single post
router.get('/:id', getOnePost);

// GET n most liked posts
router.get('/mostliked/:n', getMostLikedPosts);


// POST a new post
router.post('/', requireAuth, createPost);
// when a post request comes in, 
// it will find the createPost function which is exported from the Controller!!!



// DELETE a post
router.delete('/:id', requireAuth, deletePost);



// UPDATE a new post
router.patch('/:id', requireAuth, updatePost);



module.exports = router;