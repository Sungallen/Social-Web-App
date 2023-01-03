/* eslint-disable @typescript-eslint/no-explicit-any */

import { rest } from 'msw'

import Env from 'config/env'
import { IGroupCardProps } from 'features/types/group.types'
import { db, persistDb } from 'test/msw/db'

const BASE_URL = `${Env.API_BASE_URL}/groups`

export const groupHandlers = [
  rest.get(BASE_URL, (req, res, ctx) => {
    try {
      const result = db.groups.getAll()
      return res(ctx.json(result))
    } catch (error: any) {
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),

  rest.get(`${BASE_URL}/:groupId`, (req, res, ctx) => {
    try {
      const { groupId } = req.params
      const result = db.groups.findFirst({
        where: {
          id: {
            equals: groupId,
          },
        },
      })
      return res(ctx.json(result))
    } catch (error: any) {
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),

  rest.post<any>(BASE_URL, (req, res, ctx) => {
    try {
      console.log('req', req)
      const data = req.body
      console.log('data', data)
      const result = db.groups.create({
        ...data,
      })
      persistDb('groups')
      return res(ctx.json(result))
    } catch (error: any) {
      console.log(error)
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),

  // rest.put<Post>(`${BASE_URL}/:postId`, (req, res, ctx) => {
  //   try {
  //     const data = req.body
  //     const { postId } = req.params
  //     const result = db.posts.update({
  //       where: {
  //         id: {
  //           equals: postId,
  //         },
  //       },
  //       data,
  //     })
  //     persistDb('posts')
  //     return res(ctx.json(result))
  //   } catch (error: any) {
  //     return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
  //   }
  // }),

  // rest.delete<Post>(`${BASE_URL}/:postId`, (req, res, ctx) => {
  //   try {
  //     const { postId } = req.params
  //     const result = db.posts.delete({
  //       where: {
  //         id: {
  //           equals: postId,
  //         },
  //       },
  //     })
  //     persistDb('posts')
  //     return res(ctx.json(result))
  //   } catch (error: any) {
  //     return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
  //   }
  // }),
]
