import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Menu, Breadcrumb, Row, Col, Dropdown, Icon } from 'antd';
import './Nav.css';

class Nav extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentIndex: this.props.currentIndex
    };
  }

  handleClick = (e) => {
    console.log(this.state.currentIndex);
    this.setState({
      currentIndex: e.key
    });
  };

  renderLinks = (routes) => {
    const { user } = this.props;

    return (
      <Menu theme="light" mode="horizontal" style={{lineHeight: '64px'}} onClick={this.handleClick}
            selectedKeys={[this.state.current]}>
        {
          routes.map((route, index) => (
              <Menu.Item key={index}>
                <Link to={route.path}>
                  <span className="nav-text">{route.name}</span>
                </Link>
              </Menu.Item>
            )
          )
        }

        <Menu.Item key='user' className="to-right-important">
          <Dropdown overlay={
           <Menu>
             <Menu.Item className="nav-text" key="1">
                {user.data.id ? <Link to="/auth/logout">Logout</Link> : <Link to="/auth/login">Login</Link>}
             </Menu.Item>
              <Menu.Item className="nav-text" key="3">
                <Link to="/auth/register">Register</Link>
             </Menu.Item>
           </Menu>
          }>
            <div>
              <img src={user.data.avatar} width="32px" height="32px" className="avatar-log to-right"
                   alt={user.data.username}/>
              <span className="avatar-log-username">{user.data.username}</span>
            </div>
          </Dropdown>
        </Menu.Item>
      </Menu>
    );
  };

  render () {
    return (
      <div className="ant-layout-top m-b-30">
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <img className="ant-layout-logo"/>
            {this.renderLinks(this.props.routes)}
          </div>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  routes: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

Nav.defaultProps = {
  currentIndex: 0
};

export default Nav;