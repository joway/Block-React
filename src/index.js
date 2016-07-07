import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from 'components/sidebar/SideBar';
import Content from 'components/content/Content';
import {Row, Col} from 'antd';
import { Router, Route, Link } from 'react-router'
import './index.scss'
const App = () => (
    <Row className="main" justify="center" type="flex">
        <Col xs={24} md={6} className="side-bar">
            <SideBar />
        </Col>

        <Col xs={24} md={18} className="content">
            <Content />
        </Col>
    </Row>

);
// 新建一个组件让其在 Inbox 内部渲染
const Message = React.createClass({
    render() {
        return <h3>Message</h3>
    }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
        <Route path="/post" component={Message} />
    </Router>,
    document.getElementById('app')
);
