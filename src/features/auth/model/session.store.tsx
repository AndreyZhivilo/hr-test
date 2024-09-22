'use client'

import { createContext, ReactNode, useContext } from 'react'
import { create, StoreApi, UseBoundStore } from 'zustand'

export type Session = {
	id: string
	name: string
	avatar: string
}

type SessionStore = {
	currentSession?: Session
	setCurrentSession: (session: Session) => void
	removeSession: () => void
}

const createSessionStore = (session: Session | undefined) => {
	return create<SessionStore>((set) => ({
		isLoading: false,
		currentSession: session,
		setCurrentSession: (session) => {
			set({ currentSession: session })
		},
		removeSession: () => {
			set({ currentSession: undefined })
		},
	}))
}

const sessionContext = createContext<UseBoundStore<StoreApi<SessionStore>>>({} as UseBoundStore<StoreApi<SessionStore>>)

export const SessionProvider = ({ session, children }: { session: Session | undefined, children: ReactNode }) => {
	const store = createSessionStore(session)
	return <sessionContext.Provider value={store}>{children}</sessionContext.Provider>
}

export const useSession = () => useContext(sessionContext)()