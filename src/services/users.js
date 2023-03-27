import axios from 'axios'

export function getFollowing(params) {
  return axios.get('http://localhost:3000/following_list', {
    params,
  }) 
}

export function getForYou(params) {
  return axios.get('http://localhost:3000/for_you_list', {
    params,
  })
}
