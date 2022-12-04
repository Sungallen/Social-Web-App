import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const LoginPage = React.lazy(() => import('pages/loginPage'))
const ProfilePage = React.lazy(() => import('pages/profilePage'))

const AppRoutes = () => (
  <>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<ProfilePage />} />
      </Routes>
    </Suspense>
  </>
)

export default AppRoutes
