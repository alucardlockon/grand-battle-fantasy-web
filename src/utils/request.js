import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL, // api的base_url
  timeout: 5000 // request timeout
})

function request (url, method) {
  return service.request({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 5000,
    url: url,
    method: method
  })
}

export {
  service,
  request
}
