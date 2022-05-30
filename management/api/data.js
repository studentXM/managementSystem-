import axios from './axios'

export const getMenu = (param) => {
    return axios.request({
        url:'/permission/getMenu',
        methods:'post',
        data:param
    })
}

export const getData = (param) => {
    return axios.request({
        url:'/home/getData',
        methods:'get',
        data:param
    })
}