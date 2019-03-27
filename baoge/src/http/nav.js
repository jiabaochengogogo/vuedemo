import * as http from './base'

/**
 * 获取导航栏全部参数
 */

const getNavList = params => {
  return http.fetch('boss/navigation/get', params)
}

export { getNavList }
