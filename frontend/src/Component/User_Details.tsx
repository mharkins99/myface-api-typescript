import React, { useState, useEffect } from 'react';
import { Page } from '../../../src/models/api/page'
import { UserModel } from '../../../src/models/api/userModel'
// import { UserPostModel } from '../../../src/models/api/userModel'
import { Moment } from 'moment'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import {getUser} from '../../../src/services/userService'


export default function User_Details(){

    let { userId } = useParams();

    const user=await getUser(userId);

    return (
        <h1>{}</h1>
    );
}