'use client'

import React from "react";
import { SessionProvider } from "@/features/auth/model";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider session={{ id: '1', name: 'Андрей', avatar: '/user-avatar.jpg' }}>{children}</SessionProvider>
	)
}