import request from '@/utils/request'


//获取
export const getlost = () => {
  return request('/lost/get', 'get')
}

