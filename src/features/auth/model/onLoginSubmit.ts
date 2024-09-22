import type { LoginForm } from './login-form-schema'
import type { LoginResponse } from '@/app/api/auth/login/route'
import { ACCESS_TOKEN_LOCAL_STORAGE_NAME } from '@/shared/config/client-env-variables'

export async function onLoginSubmit(credentials: LoginForm) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
  const data: LoginResponse = await res.json()
  if (data.access_token) {
    localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME, data.access_token)
  }
}
