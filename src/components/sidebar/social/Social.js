/**
 * Created by joway on 16/7/6.
 */
import React from 'react';
import { Icon, Button } from 'antd';
import {Row, Col} from 'antd';
import './Social.scss'

const Social = () => (
    <Row className="social" type="flex" justify="center" >
        <Col md={1} className="social-item">
            <Icon type="book" />
        </Col>
        <Col md={1} className="social-item">
            <Icon type="picture" />
        </Col>
        <Col md={1} className="social-item">
            <Icon type="cloud" />
        </Col>
        <Col md={1} className="social-item">
            <Icon type="tags-o" />
        </Col>
        <Col md={1} className="social-item">
            <Icon type="github" />
        </Col>
    </Row>
);

export default Social;
