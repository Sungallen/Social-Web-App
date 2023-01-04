import Env from 'config/env'
import makeApi from 'lib/apiConfiguration'
import { IRegisterPayload } from 'features/types/user.types'
import { ICourt } from 'features/types/court.types'

const api = makeApi(`${Env.API_BASE_URL}`)

export const getCourtsApi = async (token: string) => {
  const data: ICourt[] = await api.get('/api/court/getcourts', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  return data
}
