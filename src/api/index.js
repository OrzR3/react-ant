/* 
包含应用中所有接口请求函数的模块
*/
import ajax from "./ajax"
/* 这里写死用的nba测试地址  http://nba.backend.prod.cbahooppark.cn/NewLeYunService*/
const BASE = "http://localhost:3000";
// 登录

const url = "/goods/getCargoList?classId=&formatId=&gymId=1&pageIndex=1&pageSize=10&searchParam=&sortId=";

export const reqLogin = (username,password) => ajax(BASE + url,{username, password},"GET");