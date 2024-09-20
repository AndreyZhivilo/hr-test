'use client'

import { cn } from '@/shared/lib'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/ui/select"
import { SelectIcon } from './select-icon'
import Image from "next/image";
import { Button } from '@/shared/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/shared/ui/popover"




export function DashboardControls({ className }: { className: string }) {
	return (
		<div className={cn(className)}>
			<div className="md:flex gap-[16px] hidden">
				<Select>
					<SelectTrigger
						triggerIcon={<SelectIcon className="ml-2" />}
						className="w-auto border border-[#7b96b0]"
					>
						<SelectValue placeholder="Request a Change" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger
						triggerIcon={<SelectIcon className="ml-2" />}
						className="w-auto border border-[#7b96b0]"
					>
						<Image src='/settings-icon.svg' width={16} height={16} alt='настройки' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<Popover>
				<PopoverTrigger asChild>
					<Button className='md:hidden shadow-none mt-[20px]'>
						<Image width={16} height={16} src='/dots-icon.svg' alt='menu' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='flex flex-col gap-4 items-start'>
					<Select>
						<SelectTrigger
							triggerIcon={<SelectIcon className="ml-2" />}
							className="w-auto border border-[#7b96b0]"
						>
							<SelectValue placeholder="Request a Change" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Light</SelectItem>
							<SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger
							triggerIcon={<SelectIcon className="ml-2" />}
							className="w-auto border border-[#7b96b0]"
						>
							<Image src='/settings-icon.svg' width={16} height={16} alt='настройки' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Light</SelectItem>
							<SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem>
						</SelectContent>
					</Select>
				</PopoverContent>
			</Popover>

		</div>
	)
}