import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import UseAuth from '../context/AuthContext'

const AdminRoute = ({ children }) => {
  const { user, isloading, isAdmin } = UseAuth()
  let location = useLocation()
  if (isloading) {
    return <p> Loading.. </p>
  }
  return (
    <>
      {user.email && isAdmin ? (
        children
      ) : (
        <Navigate to="/" state={{ from: location }}></Navigate>
      )}
    </>
  )
}

export default AdminRoute
