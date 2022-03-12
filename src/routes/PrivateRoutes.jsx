import React , {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

const PrivateRoutes = (props) => {
  
    const {user} = useContext(AuthContext)


    return user.logged
    ? props.children 
    : <Navigate to='/login'/>
}

export default PrivateRoutes