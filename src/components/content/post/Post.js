/**
 * Created by joway on 16/7/6.
 */
import React from 'react';
import {Row, Col} from 'antd';
import './Post.scss'
const Post = () => (
    <Row type="flex" className='' justify='center'>
        <Row type="flex" className='post-title' justify='center'>
            <h1>Title is a title</h1>
        </Row>
        <Row type="flex" className='markdown-body post-content' justify='center'>
            <Col span={20}>
                <p>在多数业务情况下，Ant Design需要在设计区域内解决大量信息收纳的问题，
                    因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。
                </p>
                <p>划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。
                    『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，
                    以保证视觉层面的舒适感。
                </p>
            </Col>
        </Row>
    </Row >
);

export default Post;
