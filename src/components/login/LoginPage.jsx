import React  , {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import {types} from '../../types'



const LoginPage = () => {

  const navigate = useNavigate();
  const {user , dispatch} = useContext(AuthContext);


  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: {
        name:'carlos',
      }
    }

    dispatch(action);
    
    const lastpath = JSON.parse(localStorage.getItem('lastpath'));

    navigate(lastpath, { 
      replace: true
    })
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>

      <button className="btn btn-primary" onClick={handleLogin}>login</button>
    </div>
  )
}

export default LoginPage