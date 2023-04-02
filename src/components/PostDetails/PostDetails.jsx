import React from 'react';
import {useLoaderData, useNavigate} from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className='post-container'>
            <h3>Post Id:{post.id}</h3>
            <h3>Post Title:{post.title}</h3>
            <p>Description: {post.body}</p>

            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;