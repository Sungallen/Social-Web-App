import { Navbar } from 'features/profile/navbar/navbar'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Header from 'features/group/groupHeader'
import EventCard from 'features/group/eventCard'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import GroupCard from 'features/group/groupCard'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { IEventCardProps, ViewState } from 'features/types/group.types'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import useGroupService from 'features/hooks/useGroupService'
import { groupActions } from 'features/store/group.slice'

export interface IEventCardListProps {
  cards?: Array<IEventCardProps>
}

export const GroupPage: React.FC = () => {
  const viewState = useAppSelector(state => state.group.viewState)
  const dispatch = useAppDispatch()
  const { groups, fetchAllGroups } = useGroupService()

  useEffect(() => {
    fetchAllGroups()
  }, [fetchAllGroups])

  const payload = {
    title: 'test',
    body: 'test',
  }

  const onCreateNewGroup = () => {
    dispatch(groupActions.createNewGroupSaga({ title: 'test' }))
  }

  return (
    <>
      <div className="home">
        <Navbar />
      </div>
      <CssBaseline />
      <Button>
        <AddCircleOutlineIcon onClick={onCreateNewGroup} fontSize="large" />
      </Button>
      add new one event or group
      <Container maxWidth="md">
        <Header />
        {/* {viewState === ViewState.SHOW_EVENTS ? EventCards : GroupCards} */}
        {/* map event cars */}

        {viewState === ViewState.SHOW_EVENTS
          ? groups.map((card, k) => (
              <EventCard
                key={k}
                id={card.id}
                author={card.author}
                title={card.title}
                description={card.description}
                place={card.place}
              />
            ))
          : groups.map((card, k) => (
              <GroupCard
                key={k}
                id={card.id}
                author={card.author}
                title={card.title}
                description={card.description}
                place={card.place}
              />
            ))}
      </Container>
    </>
  )
}

export default GroupPage
