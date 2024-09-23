'use client'

import { ReactNode } from "react";
import { useSession } from '@/features/auth/model'
import { useRouter } from "next/navigation";

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