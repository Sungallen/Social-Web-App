export enum TEventStatus {
  ONGOING = 'ONGOING',
  END = 'END',
  UPCOMING = 'UPCOMING',
}

export interface IEvent {
  id: string
  name: string
  description: string
  created_time: Date
  end_time?: Date
  owner: string
  members?: string[] // who is the cohost
  image?: string // url
  status?: TEventStatus
}
