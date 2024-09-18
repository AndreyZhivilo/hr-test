import {z} from 'zod'

export const loginFormSchema = z.object({
	email: z.string().email({message: 'Неправильный email'}),
	password: z.string({required_error: 'Вы забыли указать пароль'}).min(5, {message: 'Пароль слишком короткий'})
})

export type LoginForm = z.infer<typeof loginFormSchema>