import request from '@/utils/request'


//警情通报
export const circulate = (form) => {
  return request('/case/circulate', 'post', form)
}

