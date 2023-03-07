import request from '@/utils/request'


//举报
export const report = (form) => {
  return request('/clue/report', 'post', form)
}

