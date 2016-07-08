/**
 * Created by joway on 16/7/6.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Card} from 'antd';
import { Link } from 'react-router'

const PostCard = () => (
    <Link to="/about" to="/post">
        <Card title="Post Title" style={{ width: 800 }}>
            <p>Post content</p>
            <p>Post content</p>
            <p>Post content</p>
        </Card>
    </Link>

);

export default PostCard;
