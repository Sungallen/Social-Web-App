import Post from 'features/post/post'
import Posts from 'features/post/posts'
import Share from 'features/postSend/postSend'
import { LeftBar } from 'features/profile/leftbar/leftbar'
import { Navbar } from 'features/profile/navbar/navbar'
import RightBar from 'features/profile/rightbar/rightbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { IPost } from './types'

export const ProfilePage: React.FC = () => {
  const post: IPost[] = [
    {
      id: 1,
      content: 'stinres',
      image:
        'http://localhost:4000/api/user/image?path=/server/media/profile_pictures/main_page.png',
      timestamp: '123156',
      numlike: 0,
      title: 'sport',
      type: 'basketball',
      userId: 123,
    },
    {
      id: 1,
      content: 'stinres',
      image:
        'http://localhost:4000/api/user/image?path=/server/media/profile_pictures/main_page.png',
      timestamp: '123156',
      numlike: 0,
      title: 'sport',
      type: 'basketball',
      userId: 123,
    },
  ]
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <LeftBar />
        <div style={{ flex: 0.5 }}>
          <Outlet />
        </div>
        <div style={{ display: 'table-column' }}>
          <Share />
          <Posts />
        </div>
        <div style={{ flex: 0.5 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default ProfilePage
