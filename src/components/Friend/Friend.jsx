import React from 'react';
import './Friend.css'
import {Link} from 'react-router-dom'

const Friend = ({friend }) => {
    const {id,name,email,username,website,phone} = friend;
    return (
        <div className='friend'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{username}</p>
            <p>{website}</p>
            <p>{phone}</p>
            <p><Link to={`/friend/${id}`}>Details</Link></p>
        </div>
    );
};

export default Friend;