'use client'

import React, { useState } from "react";
import { SessionProvider } from "@/features/auth/model";
import { useEffect } from "react";
import { fetchUser } from '@/features/auth/api'
import type { Session } from '@/features/auth/model'

export function AppLoader({ children }: { children: React.ReactNode }) {
	const [session, setSession] = useState<Session>()
	useEffect(() => {
		fetchUser().then((data) => {
			const profile = data.data.myProfile
			setSession({ id: profile.id, name: profile.name, avatar: profile.avatar })
		}).catch(e => console.log('Error!!', e))
	}, [])
	return (
		<SessionProvider session={session}>
			{children}
		</SessionProvider>
	)
}