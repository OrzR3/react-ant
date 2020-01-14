/* 
包含应用中所有接口请求函数的模块
*/
import jsonp from 'jsonp'
import ajax from "./ajax"
import { message } from 'antd';
/* 这里写死用的nba测试地址  http://nba.backend.prod.cbahooppark.cn/NewLeYunService*/
const BASE = "http://localhost:3000";
// 登录

const url = "/goods/getCargoList?classId=&formatId=&gymId=1&pageIndex=1&pageSize=10&searchParam=&sortId=";

export const reqLogin = (username, password) => ajax(BASE + url, {
  username,
  password
}, "GET");
/* 
  json请求的接口请求函数
*/
export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = "http://t.weather.sojson.com/api/weather/city/101250101";
    //发送jsonp请求
    jsonp(url, {}, (err, data) => {
      console.log('jsonp()', err, data);
      if (!err && data.status === 'success') {
        const { dayPictureUrl, weather } = data.forecast[0];
        resolve({ dayPictureUrl, weather });
      } else {
        message.error("获取天气信息失败");
      }
    })
  })
}

reqWeather("长沙");