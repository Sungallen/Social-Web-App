import './navbar.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import RoomRoundedIcon from '@mui/icons-material/RoomRounded'
import { Link, useNavigate } from 'react-router-dom'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import SocialDistance from '@mui/icons-material/SocialDistance'
import { Avatar, IconButton } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAppSelector } from 'store/hooks'
import Env from 'config/env'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
})
export const Navbar = () => {
  const navigate = useNavigate()
  const currentUser = useAppSelector(state => state.user)
  const mapOnClick = () => {
    navigate('/map')
  }
  const mainOnClick = () => {
    navigate('/main')
  }
  const userInfoonClick = () => {
    navigate(`/user/${currentUser.account}`)
  }
  const groupOnClick = () => {
    navigate('/group')
  }
  const onClick = () => {}
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span> Sport_Social </span>
          </Link>
          <ThemeProvider theme={theme}>
            <IconButton color="primary" onClick={mainOnClick}>
              <HomeRoundedIcon />
            </IconButton>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <IconButton color="primary" onClick={mapOnClick}>
              <RoomRoundedIcon />
            </IconButton>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <IconButton color="primary" onClick={groupOnClick}>
              <SocialDistance />
            </IconButton>
          </ThemeProvider>
          <div className="search">
            <SearchRoundedIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="right">
          <Face6RoundedIcon />
          <ThemeProvider theme={theme}>
            <IconButton color="primary" onClick={onClick}>
              <EmailRoundedIcon />
            </IconButton>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <IconButton color="primary" onClick={onClick}>
              <NotificationsRoundedIcon />
            </IconButton>
          </ThemeProvider>{' '}
          <div className="user">
            <IconButton onClick={userInfoonClick} style={{ color: 'black' }}>
              <span>{currentUser.username}</span>
              <Avatar
                alt="Allen"
                src={`${Env.API_BASE_URL}/api/user/image?path=${currentUser.image}`}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  )
}
