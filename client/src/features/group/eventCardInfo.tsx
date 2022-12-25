import {
  Avatar,
  CardHeader,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { Navbar } from 'features/profile/navbar/navbar'
import { cyan, red } from '@mui/material/colors'
import Header from './groupHeader'

export const EventCardInfo = () => (
  <>
    <div className="home">
      <Navbar />
    </div>
    <CssBaseline />

    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          // m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          mt="2rem"
          mr="2rem"
          onClick={() => {
            // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
          }}
        >
          Myst lounge/Bar hopping New Years event
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          // m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: cyan[500] }} aria-label="recipe">
              D
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1,
            // m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Typography
            // mt="2rem"
            mr="2rem"
            onClick={() => {
              // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
            }}
          >
            Hosted By
          </Typography>
          <Typography
            // mt="2rem"
            mr="2rem"
            onClick={() => {
              // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
            }}
          >
            John D.
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ borderBottomWidth: 4 }} />
      <Typography
        variant="h6"
        component="h6"
        mt="2rem"
        mr="2rem"
        sx={{ fontWeight: 'bold' }}
        onClick={() => {
          // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
        }}
      >
        Status
      </Typography>

      <Typography
        variant="h6"
        component="h6"
        mt="2rem"
        mr="2rem"
        sx={{ fontWeight: 'bold' }}
        onClick={() => {
          // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
        }}
      >
        Details
      </Typography>
      <Typography
        mt="2rem"
        mr="2rem"
        onClick={() => {
          // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
        }}
      >
        Smoke Hookah and social Have some drinks
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        mt="2rem"
        mr="2rem"
        sx={{ fontWeight: 'bold' }}
        onClick={() => {
          // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
        }}
      >
        Attendees (4)
      </Typography>
      <Typography
        mt="2rem"
        mr="2rem"
        onClick={() => {
          // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
        }}
      >
        Smoke Hookah and social Have some drinks
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        mt="2rem"
        mr="2rem"
        sx={{ fontWeight: 'bold' }}
        onClick={() => {
          // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
        }}
      >
        Photos (0)
      </Typography>
      <Typography
        mt="2rem"
        mr="2rem"
        onClick={() => {
          // dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
        }}
      >
        Smoke Hookah and social Have some drinks
      </Typography>
    </Container>
  </>
)

export default EventCardInfo
