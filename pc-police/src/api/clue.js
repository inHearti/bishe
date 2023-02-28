import request from '@/utils/request'

//获取线索
export const getclue = () => {
  return request('/clue/getclue', 'get')
}

//反馈线索
export const feedbackclue = (form) => {
  return request('/clue/feedbackclue', 'put',form)
}
