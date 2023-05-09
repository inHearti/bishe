import request from '@/utils/request'


//举报
export const report = (form) => {
  return request('/clue/report', 'post', form)
}

//获取线索
export const getclue = () => {
  return request('/clue/getclue', 'get')
}

//提供线索
export const provideclue = (form) => {
  return request('/clue/provideclue', 'put',form)
}
