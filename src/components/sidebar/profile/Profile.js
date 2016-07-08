/**
 * Created by joway on 16/7/6.
 */
import React from 'react';
import './profile.scss'
import { Link } from 'react-router'

const Profile = () => (
    <div className='profile'>
        <Link to="/">
            <img src="https://joway.wang/assets/img/logo.jpg" className="avatar"/>
        </Link>
    </div>
);

export default Profile;
