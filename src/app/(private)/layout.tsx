'use client'

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from '@/features/auth/model'




export default function PrivateLayout({ children }: { children: ReactNode }) {
	const { currentSession } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (!currentSession) {
			router.push('/')
		}
	}, [router, currentSession])

	if (!currentSession) {
		return null
	}

	return (
		<div>{children}</div>
	)

}