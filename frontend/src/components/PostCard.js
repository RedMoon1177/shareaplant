import React from 'react';
import moment from 'moment';
import '../css/PostCard.css';

const PostCard = ({ post }) => {

    // Calculate duration since post creation using moment.js
    const duration = moment(post.createdAt).fromNow();

    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <img src={post.imageUrl} className="custom-card-img" alt={post.title} />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <p>Posted {duration}</p>
                <p>By {post.createdBy.user_name}</p>
                <p>Likes: {post.likes}</p>
            </div>
        </div>
    )
}

export default PostCard;
