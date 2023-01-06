import './userInfo.scss'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { useParams } from 'react-router-dom'
import { SyntheticEvent, useEffect, useState } from 'react'
import { Button, IconButton, Stack } from '@mui/material'
import { userSlice, userActions } from 'features/store/user.slice'
import Env from 'config/env'

import Posts from '../post/posts'

export const UserInfo = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(state => state.user)
  const currentUserInfoParam = useParams()
  const [isViewingOwnProfile, setIsViewingOwnProfile] = useState(false)
  const [picture, setPicture] = useState<FileList | null>(null)
  const [isUploadedImage, setIsUploadedImage] = useState(false)

  useEffect(() => {
    if (currentUserInfoParam.id === currentUser.account) {
      setIsViewingOwnProfile(true)
    }
  }, [currentUserInfoParam.id])

  // set current user photo status, if user has upload file but not send should be some UI show
  const onUploadImg = (e: SyntheticEvent) => {
    setPicture(current => (e.target as HTMLInputElement).files)
  }

  const onUploadProfileImage = (e: SyntheticEvent) => {
    if (picture !== null) dispatch(userSlice.actions.modifyUserImage(picture[0].name))
    dispatch(
      userActions.uploadProfileImageSaga(picture === null ? null : picture[0], currentUser.token),
    )
  }

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />

        <img
          src={`${Env.API_BASE_URL}/api/user/image?path=${currentUser.image}`}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            {/* <IconButton color="primary" aria-label="upload picture" component="label"> */}
            {/* <IconButton aria-label="upload picture" component="label">
              <input
                type="file"
                id="file"
                accept="image/png, image/gif, image/jpeg"
                style={{ display: 'none' }}
                onChange={onUploadImg}
              />
              <FileUploadIcon />
            </IconButton> */}
            <Stack direction="row" alignItems="center" spacing={2}>
              {/* send the photo to backend */}
              <IconButton aria-label="upload picture" component="label">
                <input
                  type="file"
                  id="file"
                  accept="image/png, image/gif, image/jpeg"
                  style={{ display: 'none' }}
                  onChange={onUploadImg}
                />
                <FileUploadIcon />
              </IconButton>
              <Button
                variant="contained"
                component="label"
                onClick={onUploadProfileImage}
                size="small"
              >
                Upload
                {/* <input hidden accept="image/*" multiple type="file" /> */}
              </Button>
            </Stack>

            <span>{currentUser.account}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>lama.dev</span>
              </div>
            </div>
            {/* if the current user is viewing his own profile, will not render this component */}
            {isViewingOwnProfile ? null : <button>follow</button>}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default UserInfo
