'use client'

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useSession } from '@/features/auth/model'




export default function PrivateLayout({ children }: { children: ReactNode }) {
	const { currentSession } = useSession()
	const router = useRouter()
	if (!currentSession) {
		router.push('/')
	} else {
		return (
			<div>{children}</div>
		)
	}
}