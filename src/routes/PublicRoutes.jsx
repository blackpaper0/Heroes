import React  , { useContext }from 'react'
import { Navigate } from 'react-router-dom';
import {AuthContext} from '../auth/authContext'
const PublicRoutes = ({children}) => {
    
    const {user} = useContext(AuthContext);
    return user.logged 
            ?<Navigate to='/marvel'/>
            :children
}

export default PublicRoutes