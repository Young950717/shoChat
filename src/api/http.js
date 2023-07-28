import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://llm-assist.com:5002',
  timeout: 300000
})
instance.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  config.headers['accept'] = 'application/json'
  if (config.data) {
    for (const key in config.data) {
      if (!config.data[key]) {
        delete config.data[key]
      }
    }
  }
  return config
}, error => {
  return Promise.reject(error)
}
)
instance.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data;
  }
},
  error => {
    return Promise.reject(error);
  }
)
export default instance