import { Container, CssBaseline } from '@mui/material'
import { Navbar } from 'features/profile/navbar/navbar'
import { useParams } from 'react-router-dom'
import Header from './groupHeader'

// todo fix the router bug
export const EventCardInfo = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <>
      <div className="home">
        <Navbar />
      </div>
      <CssBaseline />

      <Container maxWidth="md">
        <Header />
        {id}
        {/* {viewState === ViewState.SHOW_EVENTS ? EventCards : GroupCards} */}
      </Container>
    </>
  )
}

export default EventCardInfo
