import React from 'react'
import { Route, useHistory } from 'react-router-dom'

import { useUserContext } from './contexts/user-contexts'

function AuthRoute({ auth, ...props }) {
  const { user } = useUserContext()
  const history = useHistory()

  if (auth && user === null) {
    history.replace('/login')
    return null
  }
  /**
    인증처리
     */
  return <Route {...props} />
}
export default AuthRoute
