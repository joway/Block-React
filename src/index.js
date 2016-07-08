import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from 'components/sidebar/SideBar';
import Content from 'components/content/Content';
import Post from 'components/content/post/Post'
import {Row, Col} from 'antd';
import {Router, Route, Link} from 'react-router'
import './index.scss'
const App = () => (
    <Row className="main" justify="start" type="flex" >
        <Col xs={0} md={4} className="side-bar">
            <SideBar />
        </Col>

        <Row type="flex" justify="end">
            <Col xs={24} md={20} className="content">
                <Content />
            </Col>
        </Row>
    </Row>

);

const PostDetail = () => (
    <Row className="main" justify="start" type="flex" >
        <Col xs={0} md={4} className="side-bar">
            <SideBar />
        </Col>
        <Row type="flex" justify="end">
            <Col xs={24} md={20} className="content">
                <Post />
            </Col>
        </Row>
    </Row>

);


ReactDOM.render(
    <Router>
        <Route path="/" component={App}/>
        <Route path="post" component={PostDetail}/>
    </Router>,
    document.getElementById('app')
);
