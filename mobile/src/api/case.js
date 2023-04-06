import request from '@/utils/request'


//获取案件
export const getcase = () => {
  return request('/case/getcase', 'get')
}