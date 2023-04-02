import React from 'react';
import './Post.css'
import {Link,useNavigate} from 'react-router-dom'
const Post = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <p><Link to={`/post/${id}`}>Post Details</Link></p>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigation}>With Handler</button>
        </div>
    );
};

export default Post;