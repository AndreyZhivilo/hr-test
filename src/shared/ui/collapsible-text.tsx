'use client'

import { useState, useRef, ReactNode } from 'react'
import { cn } from '@/shared/lib'

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/shared/ui/collapsible'


export function CollapsibleText({
	children,
	triggerTextClosed,
	triggerTextOpened,
	className,
}: {
	children: ReactNode
	triggerTextClosed: string | ReactNode
	triggerTextOpened: string | ReactNode
	className?: string
}) {
	const [isOpen, setIsOpen] = useState(false)
	const contentRef = useRef<HTMLDivElement>(null)

	return (
		<Collapsible className={cn('flex flex-col', className)}>
			<CollapsibleContent
				forceMount
				className={cn(
					'relative prose max-w-full overflow-hidden h-0',
					{ 'h-auto': isOpen },
				)}
				ref={contentRef}
			>
				{children}

			</CollapsibleContent>
			<CollapsibleTrigger
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? triggerTextOpened : triggerTextClosed}
				</CollapsibleTrigger>
		</Collapsible>
	)
}
