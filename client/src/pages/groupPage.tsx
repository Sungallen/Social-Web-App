import { Navbar } from 'features/profile/navbar/navbar'
import CssBaseline from '@mui/material/CssBaseline'

import Container from '@mui/material/Container'
import Header from 'features/group/groupHeader'
import EventCard from 'features/group/eventCard'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import GroupCard from 'features/group/groupCard'
import { useAppSelector } from 'store/hooks'
import { IBaseCardProps, TEventStatus, ViewState } from 'features/types/group.types'
import { nanoid } from '@reduxjs/toolkit'
import { Button } from '@mui/material'

const dummyData: IBaseCardProps[] = [
  {
    id: nanoid(),
    title: 'test',
    description: 'test',
    created_time: new Date(),
    event_time: new Date(),
    place: 'test',
    author: 'john',
    members: ['test'],
    image: 'test',
    status: TEventStatus.END,
  },
]

export const GroupPage = () => {
  const arrIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const EventCards = arrIds.map(card => <EventCard key={card.toString()} eventCardId={nanoid()} />)
  const GroupCards = arrIds.map(card => <GroupCard key={card.toString()} groupCardId={nanoid()} />)
  const viewState = useAppSelector(state => state.group.viewState)
  // const
  return (
    <>
      <div className="home">
        <Navbar />
      </div>
      <CssBaseline />
      <Button>
        <AddCircleOutlineIcon fontSize="large" />
      </Button>
      add new one event or group
      <Container maxWidth="md">
        <Header />
        {viewState === ViewState.SHOW_EVENTS ? EventCards : GroupCards}
      </Container>
    </>
  )
}

export default GroupPage
