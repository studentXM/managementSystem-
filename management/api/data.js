import axios from './axios'

export const getMenu = (param) => {
    return axios.request({
        url:'/permission/getMenu',
        method:'post',
        data:param
    })
}

export const getData = (param) => {
    return axios.request({
        url:'/home/getData',
        method:'get',
        data:param
    })
}

export const getUser = (params) => {
    console.log(params)
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params
    })
}

export const deleteUser = (params) => {
    return axios.request({
      url:'user/del',
      method:'post',
      params
    })
}

export const createUser = (params) => {
  return axios.request({
    url:'user/add',
    method:'post',
    params
  })
}