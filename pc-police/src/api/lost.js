import request from '@/utils/request'


//添加物品
export const addlost = (form) => {
  return request('/lost/add', 'post', form)
}

export const getlost = () => {
  return request('/lost/get', 'get')
}

