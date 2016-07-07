/**
 * Created by joway on 16/7/6.
 */
import React from 'react';
import {Row, Col} from 'antd';
import Profile from './profile/Profile'
import SideMenu from './sidemenu/SideMenu'
import Social from './social/Social'

import './SideBar.scss';

const SideBar = React.createClass({
    render() {
        return (
            <Row type="flex" justify="start">
                <Profile />
                <SideMenu />
                <Social />
            </Row>
        );
    },
});


export default SideBar;
