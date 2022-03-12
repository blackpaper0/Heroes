import React , {useContext} from 'react'
import { Navigate , useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

const PrivateRoutes = (props) => {
  
    const {user} = useContext(AuthContext)

    const {pathname , search} = useLocation();

    localStorage.setItem('lastpath' , JSON.stringify(pathname + search));

    return user.logged
    ? props.children 
    : <Navigate to='/login'/>
}

export default PrivateRoutes