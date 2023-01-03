import { groupHandlers } from 'test/msw/handlers/groups'

export const handlers = [
  // ...db.posts.toHandlers('rest'),
  ...groupHandlers,
]
