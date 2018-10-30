import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  if (localStorage.getItem('jwt')) {
    config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403) {
      location.href = '/account/login'
    }
    return Promise.reject(error)
  })

export default service
