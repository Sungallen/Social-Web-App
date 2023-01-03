import { IUser, IUserSlice } from './user.types'

type Nullable<T> = T | null

export interface IGroup {
  readonly id: number
  number_of_people: number
  timestamp: string
  title: string
  content: Nullable<string>
  court_id: number
  user_id: number
}

export enum TEventStatus {
  ONGOING = 'ONGOING',
  END = 'END',
  UPCOMING = 'UPCOMING',
}

export enum ViewState {
  SHOW_EVENTS = 'SHOW_EVENTS',
  SHOW_GROUPS = 'SHOW_GROUPS',
}

export interface IBaseCardProps {
  id: string | number
  title: string
  description: string
  created_time?: Date // when the event is created
  event_time?: Date // when the event is hold
  place: string
  author: string
  members?: IUser[] // who is the cohost
  image?: string // url
  status?: TEventStatus
}
export interface IEventCardProps extends IBaseCardProps {
  current_attendees?: number
  current_spot_left?: number
}

export interface IGroupCardProps extends IBaseCardProps {
  current_attendees?: number
  current_spot_left?: number
}

// export type IGroupCardProps = IBaseCardProps
