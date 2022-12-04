import { SportMap } from 'features/map/map'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const LoginPage = React.lazy(() => import('pages/loginPage'))
const ProfilePage = React.lazy(() => import('pages/profilePage'))
const RegisterPage = React.lazy(() => import('pages/registerPage'))
const MapPage = React.lazy(() => import('pages/mapPage'))

const AppRoutes = () => (
  <>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Suspense>
  </>
)

export default AppRoutes
