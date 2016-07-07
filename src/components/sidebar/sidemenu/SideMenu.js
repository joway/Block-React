/**
 * Created by joway on 16/7/6.
 */
import React from 'react';
import {Menu, Icon} from 'antd';

import './SideMenu.scss'

const SideMenu = React.createClass({
    getInitialState() {
        return {
            current: '1',
        };
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    },
    render() {
        return (
            <Menu onClick={this.handleClick}
                  style={{ width: 240 }}
                  selectedKeys={[this.state.current]}
                  mode="inline"
                  className="menu"
            >
                <Menu.Item key="1">Timeline</Menu.Item>
                <Menu.Item key="2">Posts</Menu.Item>
                <Menu.Item key="3">Photos</Menu.Item>
                <Menu.Item key="4">Words</Menu.Item>
                <Menu.Item key="5">Lab</Menu.Item>
            </Menu>
        );
    },
});

export default SideMenu;
