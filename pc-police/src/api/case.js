import request from '@/utils/request'


//警情通报
export const circulate = (form) => {
  return request('/case/circulate', 'post', form)
}

//获取案件
export const getcase = () => {
  return request('/case/getcase', 'get')
}