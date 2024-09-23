import { useState } from 'react'
import { useSession } from './session.store'
import { authApi } from '../api'
import type { LoginForm } from './login-form-schema'
import { useRouter } from 'next/navigation'
import { routes } from '@/shared/config'

export function useSignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { setCurrentSession } = useSession()
  const router = useRouter()

  const singIn = async (credentials: LoginForm) => {
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
      router.push(routes.USER_DASHBOARD)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    singIn,
    isLoading,
    error,
  }
}
