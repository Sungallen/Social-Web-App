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
  description?: string
  created_time: Date // when the event is created
  event_time: Date | null // when the event is hold
  place: string
  author: string
  members?: string[] // who is the cohost
  image?: string // url
  status?: TEventStatus
}
export interface IEventCardProps extends IBaseCardProps {
  current_attendees?: number
  current_spot_left?: number
}

export type IGroupCardProps = IBaseCardProps
