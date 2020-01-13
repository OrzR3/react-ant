import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';
import logo from "../../assets/images/react.png";
import menuList from '../../config/menuConfig';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class LeftNav extends Component {
  /* 
  根据menuList的数据数组生成对应的标签数组
  使用map() + 递归调用
   */
  getMenuNodes_map = (menuList) => {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    });
  }
  /* 
   根据menuList的数据数组生成对应的标签数组
   使用reduce() + 递归调用
    */
  getMenuNodes = (menuList) => {
    return menuList.reduce((pre, item) => {
      // 向pre添加<Menu> 
      if (!item.children) {
        pre.push((
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        ))
      } else {
        // 向pre添加 <SubMenu>
        pre.push((
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        ))
      }
      return pre;
    }, [])
  }
  render() {
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo" />
          <h1>React后台</h1>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
        >
          {
            this.getMenuNodes(menuList)
          }
        </Menu>
      </div>
    );
  }
}