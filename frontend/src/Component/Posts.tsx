import React, { useState, useEffect } from 'react';
import {Page} from '../../../src/models/api/page'
import {PostModel} from '../../../src/models/api/postModel'
import {PostUserModel} from '../../../src/models/api/postModel'
import {Moment} from 'moment'

export function Posts() {
    const [myData, setMyData] = useState<Page <PostModel> | null > (null);
    useEffect(() => {
        fetch("http://localhost:3001/posts")
            .then(response => response.json())
            .then(response => setMyData(response));
            console.log(myData);
        
    }, []);
    if (!myData) {
        return <div>Waiting for data!</div>
    }
    
    const posts = myData.results.map(post  => {
        return (
            <div>
                <img src={post.imageUrl}/>
                <li>{post.id}</li>
                <li>{post.message}</li>
                <li>{post.imageUrl}</li>
                <li>{post.createdAt.toString()}</li>
                <li>{post.postedBy.id}</li>
                <li>{post.likedBy.length}</li>
                <li>{post.dislikedBy.length}</li>
            </div>
        )
    }) 
    return (
       <div>{posts}</div>
    );
}

