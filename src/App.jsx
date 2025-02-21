import UserContextProvider from './context/UserContext'
import AppRoutes from './routes'
import React from 'react'

const App = () => {
  return (
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  )
}

export default App
