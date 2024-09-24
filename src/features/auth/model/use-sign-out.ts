'use client'

import { useState } from 'react'
import { useSession } from './session.store'
import { authApi } from '../api'

export function useSignOut() {
  const { removeSession } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  const signOut = async () => {
    setIsLoading(true)
    await authApi
      .logout()
      .then(() => {
        removeSession()
      })
      .finally(() => setIsLoading(false))
  }
  return {
    isLoading,
    signOut,
  }
}
