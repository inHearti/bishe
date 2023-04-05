import request from '@/utils/request'



//获取
export const getinfo = () => {
  return request('/info/getinfo', 'get')
}

//修改
export const changeinfo = (form) => {
  return request('/info/changeinfo', 'put', form)
}