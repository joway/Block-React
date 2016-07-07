/**
 * Created by joway on 16/7/6.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Card} from 'antd';

const PostCard = () => (
    <Card title="Post Title" extra={<a href="#">More</a>} style={{ width: 800 }}>
        <p>Post content</p>
        <p>Post content</p>
        <p>Post content</p>
    </Card>
);

export default PostCard;
