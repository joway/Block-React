import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Menu, Breadcrumb } from 'antd';
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
      </Menu>
    );
  };

  render () {
    return (
      <div className="ant-layout-top m-b-30">
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <div className="ant-layout-logo"></div>
            {this.renderLinks(this.props.routes)}
          </div>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  routes: PropTypes.array.isRequired,
};

Nav.defaultProps = {
  currentIndex: 0
};

export default Nav;