import * as http from './base'

/**
 * 获取导航栏全部参数
 */

const getNavList = params => {
  return http.fetch('net/navigation/get', params)
}

export { getNavList }
