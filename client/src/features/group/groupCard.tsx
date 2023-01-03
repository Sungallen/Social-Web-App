import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { cyan, red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IGroupCardProps } from 'features/types/group.types'
import { useNavigate } from 'react-router-dom'

const dummyText = `This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.`

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

export const GroupCard: React.FC<IGroupCardProps> = props => {
  const navigate = useNavigate()
  const handleRedirectClick = () => {
    navigate(`/group/${props.id}`)
  }
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <Card sx={{ maxWidth: 500, margin: 3, padding: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: cyan[500] }} aria-label="recipe">
              {props.author}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={handleRedirectClick} />
            </IconButton>
          }
          title={props.title}
          // subheader={props.created_time?.toISOString()}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="120"
          image="http://localhost:4000/api/user/image?path=/server/media/group_pictures/basketball_court.png"
          alt="Basketball Court"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description ? props.description : dummyText}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          {/* <ExpandMoreIcon /> */}

          {/* <Link to={`/group/${eventCardId}`}>learn more</Link> */}
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default GroupCard
