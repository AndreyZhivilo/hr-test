'use client'

import React, { useState } from "react";
import { SessionProvider } from "@/features/auth/model";
import { useEffect } from "react";
import { authApi } from '@/features/auth/api'
import type { Session } from '@/features/auth/model'
import { LoaderCircle } from '@/shared/ui/loader-circle'

export function AppLoader({ children }: { children: React.ReactNode }) {
	const [session, setSession] = useState<Session>()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		authApi.fetchUser()
			.then((data) => {
				const profile = data.data.myProfile
				setSession({ id: profile.id, name: profile.name, avatar: profile.avatar })
			})
			.catch(() => setSession(undefined))
			.finally(() => setIsLoading(false))
	}, [])
	if (isLoading) {
		return <span className="w-screen h-screen flex justify-center items-center">
			<LoaderCircle size={40} />
		</span>
	}
	return (
		<SessionProvider session={session}>
			{children}
		</SessionProvider>
	)
}