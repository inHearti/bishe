import request from '@/utils/request'


//用户帐号登录
export const userAccountLogin = (form) => {
  return request('/user/login_yh', 'post', form)
}

//用户帐号注册
export const register = (form) => {
  return request('/user/register_yh', 'post', form)
}

//获取普通用户信息
export const getcommoninfo = () => {
  return request('/user/getcommoninfo', 'get')
}