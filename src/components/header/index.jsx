import React, { Component } from 'react';
import moment from "moment"
import { formateDate } from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import "./index.less"
import weather from "../../assets/images/moji.jpg"


export default class Header extends Component {

  state = {
    currentTime: moment(parseInt(Date.now())).format('YYYY年MM月DD日 HH:mm:ss'),
    dayPictureUrl: '',
    weatherType: '',
  }

  render() {
    const { currentTime, weatherType } = this.state;
    const username = memoryUtils.user.username;
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, {username}</span>
          <a href="javascript">退出</a>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">首页</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src={weather} alt="weather" />
            <span>{weatherType}</span>
          </div>
        </div>
      </div>
    );
  }
}