import React, { Children } from 'react'
import {Navigate} from 'react-router-dom'
const ProtectedRoute = () => {

  const isLoggedIn = localStorage.getItem('user')
  if(!isLoggedIn){
    return <Navigate to={'/login'}/>
  }

  return Children
}

export default ProtectedRoute
