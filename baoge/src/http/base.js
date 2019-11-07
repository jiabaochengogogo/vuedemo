'use strict'
import axios from 'axios'

// axios配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = ''

const fetch = (url, params = {}) => {
  console.log(url)
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const del = (url) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, {}).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export { axios, fetch, post, put, del }
