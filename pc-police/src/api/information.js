import request from '@/utils/request'



//获取案件
export const getinfo = () => {
  return request('/info/getinfo', 'get')
}