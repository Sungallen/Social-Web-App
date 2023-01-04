import Env from 'config/env'
import makeApi from 'lib/apiConfiguration'
import { IGroup, IGroupCardProps } from 'features/types/group.types'

const api = makeApi(`${Env.API_BASE_URL}`)

// REST API
export const getGroupsApi = async (token: string): Promise<IGroup[]> => {
  const data: IGroup[] = await api.get('/api/group/getgroups', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  return data
}

// export const getGroupByIdApi = (): Promise<IGroup[]> => api.get('/api/group/getgroups/:id')

export const createNewGroupApi = (group: IGroup): Promise<IGroup> =>
  api.post('/api/group/addgroup', group)

// export const updateGroupApi = (post: IGroupCardProps): Promise<IGroup> =>
//   //   api.put(`${GROUPS_BASE_URL}/${post.id}`, post)
//   api.put('/api/group/updategroup/:id')

// export const deleteGroupApi = (group: IGroupCardProps): Promise<IGroup> =>
//   //   api.delete(`${GROUPS_BASE_URL}/${group.id}`, { data: group })
//   api.delete('/api/group/deletegroup/:id')
