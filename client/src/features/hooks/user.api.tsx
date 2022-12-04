import Env from 'config/env'
import makeApi from 'lib/apiConfiguration'

const api = makeApi(`${Env.API_BASE_URL}`)

export const userLoginApi = (account: string, password: string): Promise<any> =>
  api.get(`/api/user/login?account=${account}&password=${password}`).catch(error => error)
