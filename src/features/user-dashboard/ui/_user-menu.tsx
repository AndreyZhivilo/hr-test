'use client'

import { userMenuItems } from '@/shared/mock-data';
import { cn } from '@/shared/lib';
import Link from 'next/link';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/shared/ui/select"

import { SelectIcon } from '../../../shared/ui/select-icon'


const CURRENT_PAGE = 'Time Off'

export function UserMenu({ className }: { className?: string }) {
	return (
		<nav className={cn('overflow-x-auto no-scrollbar', className)}>
			<ul className='flex items-center gap-4'>
				{userMenuItems.map(item => (
					<li
						key={item.label}
						className={cn("grow shrink basis-0 h-[49px] p-4 rounded-tl-lg rounded-tr-lg justify-center items-center gap-2.5 flex hover:bg-white transition-colors",
							CURRENT_PAGE === item.label && 'bg-white'
						)}
					>
						<Link href={item.url} className="text-black text-sm font-medium w-max">{item.label}</Link>
					</li>
				))}
				<li>
					<Select>
						<SelectTrigger
							triggerIcon={<SelectIcon className="ml-2" />}
							className="w-auto border-none shadow-none"
						>
							Еще
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Light</SelectItem>
							<SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem>
						</SelectContent>
					</Select>
				</li>
			</ul>

		</nav>
	)
}