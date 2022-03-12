import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import LoginPage from '../components/login/LoginPage'
import Dashboardroutes from './Dashboardroutes'
import PrivateRoute from './PrivateRoutes'
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
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