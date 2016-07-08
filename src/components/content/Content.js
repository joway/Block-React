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
import './github-markdown.css'

const Content = () => (
    <Row justify="center" type="flex">
        
        <Col md={20} offset={2} className="post-digest">
            <PostCard />
        </Col>
        <Col md={20} offset={2} className="post-digest">
            <PostCard />
        </Col>
        <Col md={20} offset={2} className="post-digest">
            <PostCard />
        </Col>
        <Col md={20} offset={2} className="post-digest">
            <PostCard />
        </Col>
        <Col md={20} offset={2} className="pagination">
            <Paging />
        </Col>
    </Row>
);

export default Content;
