import request from '@/utils/request'


//帐号登录
export const userAccountLogin = (form) => {
  return request('/user/login', 'post', form)
}

