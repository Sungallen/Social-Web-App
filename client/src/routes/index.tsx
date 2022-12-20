import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const LoginPage = React.lazy(() => import('pages/loginPage'))
const ProfilePage = React.lazy(() => import('pages/profilePage/profilePage'))
const RegisterPage = React.lazy(() => import('pages/registerPage'))
const MapPage = React.lazy(() => import('pages/mapPage'))
const UserInfoPage = React.lazy(() => import('pages/userInfoPage'))
const GroupPage = React.lazy(() => import('pages/groupPage'))

const AppRoutes = () => (
  <>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/user/:id" element={<UserInfoPage />} />
      </Routes>
    </Suspense>
  </>
)

export default AppRoutes
