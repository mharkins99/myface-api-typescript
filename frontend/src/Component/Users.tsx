import React, { useState, useEffect } from 'react';
import { Page } from '../../../src/models/api/page'
import { UserModel } from '../../../src/models/api/userModel'
// import { UserPostModel } from '../../../src/models/api/userModel'
import { Moment } from 'moment'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function Users() {

 
    const [myData, setMyData] = useState<Page<UserModel> | null>(null);
    const [urlQuery, setUrlQuery] = useState<string | null > ("/users");
    useEffect(() => {
        fetch(`http://localhost:3001${urlQuery}`)
            .then(response => response.json())
            .then(response => setMyData(response))


    }, [urlQuery]);
    if (!myData) {
        return <div>Waiting for data!</div>
    }
    console.log(myData)
    const userList = myData.results.map(userItem => {
        return (
            <div key={userItem.id}>
                <li>{userItem.id}</li>
                <Link  to= {`/users/${userItem.id}`}>{userItem.username}</Link> 
                
            </div>
        )
    })

    return (
        <div>
            <h1>Users</h1>

            <div>{userList}</div>
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