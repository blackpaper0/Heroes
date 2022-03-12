import React, { useReducer  , useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import { AuthContext } from './auth/authContext'
import authReducer from './auth/authReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}

const HeroesApp = () => {

    const [user , dispatch] = useReducer(authReducer , {} , init)

    useEffect(() => {
      
        if(!user) return

        localStorage.setItem('user', JSON.stringify(user))
      
    } , [user])
    

    return (
        <div>
            <AuthContext.Provider value={{
                user,
                dispatch 

            }}>
            <Router>
                <AppRouter />
            </Router>
            </AuthContext.Provider>
        </div>
    )
}

export default HeroesApp