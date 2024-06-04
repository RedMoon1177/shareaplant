const express = require('express');
const { createPost,
        getAllPosts,
        getUserPosts,
        getOnePost,
        deletePost,
        updatePost } = require('../controllers/postController');
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router();

// define to use middlewares
router.use(requireAuth)

// GET all posts
router.get('/', getAllPosts);

// GET all posts from a loggedin user
router.get('/loggedin-user', getUserPosts);

// GET a single post
router.get('/:id', getOnePost);

// POST a new post
router.post('/', createPost);
// when a post request comes in, 
// it will find the createWorkout function which is exported from the Controller!!!

// DELETE a post
router.delete('/:id', deletePost);

// UPDATE a new post
router.patch('/:id', updatePost);

module.exports = router;