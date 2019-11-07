import * as http from './base'

/**
 * 获取图片信息全部参数
 */

const getCarouselList = params => {
  return http.fetch('net/carousel-message/findAll', params)
}

export { getCarouselList }
