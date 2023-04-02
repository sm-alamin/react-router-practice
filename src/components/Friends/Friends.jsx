import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div className=''>
            <h3>My all friends: {friends.length}</h3>
            <div className='friends-container'>
            {
                friends.map(friend => 
                    <Friend 
                    key={friend.id}
                    friend={friend}
                    />)
            }
            </div>
        </div>
    );
};

export default Friends;