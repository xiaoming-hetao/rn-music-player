import axios from 'axios'

interface RequestOptions {
  method: string
  data?: any
  params?: any
}

export const request = (url: string, options?: RequestOptions) => {
  return axios({
    baseURL: 'http://localhost:4000',
    url,
    ...options,
  }).then(response => {
    const { data } = response
    return data
  })
}
