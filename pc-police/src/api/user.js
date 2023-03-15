import request from '@/utils/request'


//公安用户帐号登录
export const userAccountLogin = (form) => {
  return request('/user/login', 'post', form)
}

//公安用户帐号注册
export const register = (form) => {
  return request('/user/register', 'post', form)
}

//获取普通用户信息
export const getcommoninfo = () => {
  return request('/user/getcommoninfo', 'get')
}