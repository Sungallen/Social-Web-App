import { LeftBar } from 'features/profile/leftbar/leftbar'
import { Navbar } from 'features/profile/navbar/navbar'
import RightBar from 'features/profile/rightbar/rightbar'
import { UserInfo } from 'features/userInfo/userInfo'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { IPost } from '../types'
import './userInfoPage.scss'

export const UserInfoPage: React.FC = () => {
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
    <div className="home">
      <Navbar />
      <div style={{ display: 'flex' }}>
        <LeftBar />
        <div style={{ flex: 0.2 }}>
          <Outlet />
        </div>
        <div style={{ display: 'table-column' }}>
          <UserInfo />
        </div>
        <RightBar />
      </div>
    </div>
  )
}
export default UserInfoPage
