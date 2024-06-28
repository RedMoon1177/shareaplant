import React from 'react';
import moment from 'moment';
import '../css/LatestPost.css';

const LatestPost = ({ post }) => {
    const calculateDuration = (createdAt) => {
        return moment(createdAt).fromNow();
    };

    return (
        <div className="container mt-5 mb-5">
            {post.map(item => (
                <div key={item._id} className="row mb-4">
                    <div className="col-md-4">
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-md-8 mt-sm-50">
                        <h5 className="font-weight-bold">{item.title}</h5>
                        <p>By {item.createdBy.user_name} - {calculateDuration(item.createdAt)}</p>
                        <p className="text-muted">{item.description}</p>
                        <a href="#" className="text-decoration-underline">Read more</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LatestPost;
