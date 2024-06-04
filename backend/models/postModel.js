const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Comment Schema
const CommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Post Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 100,
        required: false
    },
    content: {
        type: String,
        maxlength: 250,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    createdBy: {
        user_name: {
            type: String,
            required: true
        },
        user_id: {
            type: String,
            required: true
        }
    }
    // comments: [CommentSchema]
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
