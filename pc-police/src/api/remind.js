import request from '@/utils/request'


//获取提醒信息
export const getremind = () => {
  return request('/remind/get', 'get')
}


//修改提醒信息
export const warn = (form) => {
  return request('/remind/warn', 'post',form)
}
