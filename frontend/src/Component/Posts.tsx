import React, { useState, useEffect } from 'react';
import { Page } from '../../../src/models/api/page'
import { PostModel } from '../../../src/models/api/postModel'
import { PostUserModel } from '../../../src/models/api/postModel'
import { Moment } from 'moment'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function Posts() {
    const [myData, setMyData] = useState<Page<PostModel> | null>(null);
    const [urlQuery, setUrlQuery] = useState<string | null > ("/posts");
    useEffect(() => {
        fetch(`http://localhost:3001${urlQuery}`)
            .then(response => response.json())
            .then(response => setMyData(response))

    }, [urlQuery]);
    if (!myData) {
        return <div>Waiting for data!</div>
    }
    console.log(myData)
    const posts = myData.results.map(post => {
        return (
            <div>
                <img src={post.imageUrl} alt={post.message} />
                <li>{post.createdAt.toString()}</li>
                <li>{post.id}</li>
            </div>
        )
    })

    return (
        <div>
            <h1>Posts</h1>

            <div>{posts}</div>
            <div>{myData.previous ?
                <Link onClick={() => setUrlQuery(myData.previous)} to={myData.previous}>Previous</Link> :
                <></>}
            
                 {myData.next ?
                <Link onClick={() => setUrlQuery(myData.next)} to={myData.next}>Next</Link> :
                <></>}
            </div>

        </div>
    );
}


                // <li>{post.id}</li>
                // <li>{post.message}</li>
                // <li>{post.imageUrl}</li>
                // <li>{post.createdAt.toString()}</li>
                // <li>{post.postedBy.id}</li>
                // <li>{post.likedBy.length}</li>
                // <li>{post.dislikedBy.length}</li>