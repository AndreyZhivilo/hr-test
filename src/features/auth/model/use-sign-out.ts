import { routes } from '@/shared/config'
import { useState } from 'react'
import { useSession } from './session.store'
import { ACCESS_TOKEN_LOCAL_STORAGE_NAME } from '@/shared/config/client-env-variables'

export function useSignOut() {
  const { removeSession } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  const signOut = async () => {
    setIsLoading(true)
    await fetch(routes.API_LOG_OUT)
      .then(() => {
        localStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME)
        removeSession()
      })
      .finally(() => setIsLoading(false))
  }
  return {
    isLoading,
    signOut,
  }
}
