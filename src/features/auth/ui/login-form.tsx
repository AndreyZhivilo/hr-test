'use client'

import { Button } from "@/shared/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/ui/card"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { useForm, SubmitHandler } from "react-hook-form"
import { loginFormSchema, useSignIn, type LoginForm } from '../model'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircle } from '@/shared/ui/loader-circle'
import { useToast } from "@/shared/lib"
import { useEffect } from "react"



export function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>({ resolver: zodResolver(loginFormSchema) })

	const { error, isLoading, singIn } = useSignIn()
	const { toast } = useToast()

	const onSubmit: SubmitHandler<LoginForm> = singIn

	useEffect(() => {
		if (error) {
			toast({
				title: "Ошибка",
				description: `${error}`,
				duration: 4000,
			})
		}
	}, [error])



	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Войти в личный кабинет</CardTitle>
					<CardDescription>
						Введите свой email и пароль, чтобы войти в личный кабинет
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<div className="grid gap-2 relative">
						<Label htmlFor="email">Email</Label>
						<Input error={Boolean(errors.email)} id="email" type="email" placeholder="m@example.com" {...register("email")} />
						{errors.email && <span className="absolute top-0 right-0 text-red-400 text-sm">{errors.email.message}</span>}
					</div>
					<div className="grid gap-2 relative">
						<Label htmlFor="password">Пароль</Label>
						<Input error={Boolean(errors.password)} id="password" type="password" {...register("password")} />
						{errors.password && <span className="absolute top-0 right-0 text-red-400 text-sm">{errors.password.message}</span>}
					</div>
				</CardContent>
				<CardFooter>
					<Button
						disabled={isLoading || !!errors.email || !!errors.password}
						variant='outline'
						className="w-full bg-primary hover:bg-primary-foreground"
						type="submit"
					>
						{isLoading && <LoaderCircle size={20} className="mr-2" />}
						Войти
					</Button>
				</CardFooter>
			</Card>
		</form>
	)
}