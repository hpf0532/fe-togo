import request from '@/utils/request'

export function getRsas() {
    return request({
      url: '/rsas/',
      method: 'get',
    })
  }