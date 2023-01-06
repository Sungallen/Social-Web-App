import Env from 'config/env'
import makeApi from 'lib/apiConfiguration'
import { IFriendSug, IRegisterPayload } from 'features/types/user.types'

const api = makeApi(`${Env.API_BASE_URL}`)

export const userLoginApi = async (account: string, password: string): Promise<any> =>
  api.get(`/api/user/login?account=${account}&password=${password}`).catch(error => error)

export const registerApi = async (payload: IRegisterPayload): Promise<any> => {
  const temp = {
    email: payload.email,
    username: payload.username,
    account: payload.account,
    password: payload.password,
    created_time: payload.created_time.toJSON().slice(0, -1),
    gender: payload.gender,
  }
  return api.post(`/api/user/register`, temp).catch(error => {
    // console.log(error)
  })
}

export const uploadProfileImageApi = async (image: File | null, token: string): Promise<any> => {
  const formData = new FormData()
  formData.append('image', image as File)
  console.log(image)
  return api
    .post(`/api/user/uploadprofileimage`, formData, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .catch(error => {
      console.log(error)
    })
}

export const fetchFriendSug = async (token: string) => {
  const response: IFriendSug[] = await api.get(`api/user/randomgetusers`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  return response
}
