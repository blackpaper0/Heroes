import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import LoginPage from '../components/login/LoginPage'
import Dashboardroutes from './Dashboardroutes'
import PrivateRoute from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<PublicRoutes>
          <LoginPage />
        </PublicRoutes>} />
        <Route path='/*' element={
          <PrivateRoute>
            <Dashboardroutes />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default AppRouter