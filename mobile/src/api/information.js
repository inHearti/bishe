import request from '@/utils/request'



//获取
export const getinfo = () => {
  return request('/info/getinfo', 'get')
}

