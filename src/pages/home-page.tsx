import { LoginForm } from "@/features/auth/ui/login-form"
import { ThemeToggle } from '@/features/theme-toggle'

export function HomePage() {
	return (
		<div className="relative container flex items-center justify-center h-full">
			<ThemeToggle className="absolute top-4 right-4" />
			<LoginForm />
		</div>
	)
}
