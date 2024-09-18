import type { LoginForm } from "./login-form-schema";

export async function  onLoginSubmit(credentials: LoginForm) {
	return fetch('/api/auth/login', {
		method: "POST",
		body: JSON.stringify(credentials)
	})
}