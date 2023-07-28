import request from './http'
export function checkoutSession(data) {
  return request({
    method: 'post',
    url: '/create-checkout-session',
    data: {
      ...data,
      shop_url: JSON.parse(sessionStorage.getItem('_shop_url_')),
      shop_uid: JSON.parse(sessionStorage.getItem('_shop_uid_'))
    }
  })
}