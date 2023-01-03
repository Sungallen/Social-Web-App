import { useCallback } from 'react'
import { groupActions, groupSlice } from 'features/store/group.slice'
import { IGroup, IGroupCardProps } from 'features/types/group.types'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export type PostServiceOperators = {
  groups: IGroup[]
  createNewGroup: (data?: IGroup) => void
  fetchAllGroups: () => void
  // deletePost: (group: IGroupCardProps) => void
  // updatePost: (group: IGroupCardProps) => void
}

export const useGroupService = (): Readonly<PostServiceOperators> => {
  const dispatch = useAppDispatch()

  return {
    groups: useAppSelector(state => state.group.groups),

    createNewGroup: useCallback(
      (formData: any) => {
        // dispatch(groupActions.createNewGroupSaga())
      },
      [dispatch],
    ),
    fetchAllGroups: useCallback(() => {
      dispatch(groupActions.fetchAllGroupSaga('foo'))
    }, [dispatch]),
    // deletePost: useCallback(
    //   (post: Post) => {
    //     dispatch(postsActions.delete(post))
    //   },
    //   [dispatch],
    // ),
    // updatePost: useCallback(
    //   (post: Post) => {
    //     dispatch(
    //       postsActions.update({
    //         ...post,
    //         body: `Updated at ${new Date().toISOString()}`,
    //       }),
    //     )
    //   },
    //   [dispatch],
    // ),
  }
}

export default useGroupService
