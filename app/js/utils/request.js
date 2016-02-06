import 'isomorphic-fetch'
import { camelizeKeys } from 'humps'

export default async function request(endpoint) {
  return fetch(`${process.env.API_ROOT}/${endpoint}`, {
    method: 'GET',
    mode: 'cors'
  })
    .then(res => res.json())
    .then(camelizeKeys)
}