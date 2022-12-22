import { Navbar } from 'features/profile/navbar/navbar'
import CssBaseline from '@mui/material/CssBaseline'

import Container from '@mui/material/Container'
import Header from 'features/group/groupHeader'
import EventCard from 'features/group/eventCard'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

// const dummyData: IBaseCardProps[] = [
//   {
//     id: 'test',
//     name: 'test',
//     description: 'test',
//     created_time: new Date(),
//     owner: 'test',
//     members: ['test'],
//     image: 'test',
//     status: TEventStatus.END,
//   },
// ]

export const GroupPage = () => (
  <>
    <div className="home">
      <Navbar />
    </div>
    <CssBaseline />
    <AddCircleOutlineIcon fontSize="large" />
    add new one
    <Container maxWidth="md">
      <Header />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </Container>
  </>
)

export default GroupPage
