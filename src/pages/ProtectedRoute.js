import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../components/context/AuthContext'

const ProtectedRoute = ({children, requireAdmin}) => {
  const {user} = useAuthContext();

  if(!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace={true} />
  }
  return children
}

export default ProtectedRoute
