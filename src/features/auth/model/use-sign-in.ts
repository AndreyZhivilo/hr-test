'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from './session.store'
import { authApi } from '../api'
import type { LoginForm } from './login-form-schema'
import { routes } from '@/shared/config'
import { getErrorMessage } from '@/shared/api'

export function useSignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { currentSession, setCurrentSession } = useSession()
  const router = useRouter()

  const signIn = async (credentials: LoginForm) => {
    setError(null)
    setIsLoading(true)
    try {
      await authApi.submitCredentials(credentials)
      const {
        data: { myProfile },
      } = await authApi.fetchUser()

      setCurrentSession({
        id: myProfile.id,
        name: myProfile.name,
        avatar: myProfile.avatar,
      })
    } catch (e: any) {
      setError(getErrorMessage(e))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (currentSession) {
      router.push(routes.USER_DASHBOARD)
    }
  }, [currentSession, router])

  return {
    signIn,
    isLoading,
    error,
  }
}
