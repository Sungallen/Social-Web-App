import './navbar.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import RoomRoundedIcon from '@mui/icons-material/RoomRounded'
import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'

export const Navbar = () => (
  <div className="navbar">
    <div className="left">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span> Sport_Social </span>
      </Link>
      <HomeRoundedIcon />
      <RoomRoundedIcon />
      <div className="search">
        <SearchRoundedIcon />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
    <div className="right">
      <Face6RoundedIcon />
      <EmailRoundedIcon />
      <NotificationsRoundedIcon />
      <div className="user">
        <span>Allen</span>
      </div>
    </div>
  </div>
)
