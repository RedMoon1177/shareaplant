import React from 'react';
import PostCard from './PostCard';
import '../css/MostLikedPosts.css';

const MostLikedPosts = ({ posts }) => {
    return (
        <div className="container">
            <div className="mb-4 text-center"><h1>Check Out the Top Shared Plants</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    posts.map(post => (
                        <div key={post._id} className="col">
                            <PostCard post={post} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MostLikedPosts;
