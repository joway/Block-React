/**
 * Created by joway on 16/7/6.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Card} from 'antd';
import {Pagination} from 'antd';
import Paging from './pagination/Pagination'
import PostCard from './post/PostCard'
import './Content.scss'
const Content = () => (
    <Row>
        <Col md={24} className="post-digest">
            <PostCard />
        </Col>
        <Col md={24} className="post-digest">
            <PostCard />
        </Col>
        <Col md={24} className="post-digest">
            <PostCard />
        </Col>
        <Col md={24} className="post-digest">
            <PostCard />
        </Col>
        <Col md={24} className="pagination">
            <Paging />
        </Col>
    </Row>
);

export default Content;
