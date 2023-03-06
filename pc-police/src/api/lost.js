import request from '@/utils/request'


//添加物品
export const addlost = (form) => {
  return request('/lost/add', 'post', form)
}

