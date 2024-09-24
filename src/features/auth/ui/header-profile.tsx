'use client'

import { cn } from '@/shared/lib';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/shared/ui/avatar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/shared/ui/popover"
import { useSignOut } from '@/features/auth/model'
import { Button } from '@/shared/ui/button';
import { LoaderCircle } from '@/shared/ui/loader-circle';

export function HeaderProfile({ img, className }: { img?: string, className?: string }) {
	const { signOut, isLoading } = useSignOut()
	return (
		<div className={cn(className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Avatar>
						{img && <AvatarImage src={img} alt="@shadcn" className='cursor-pointer' />}
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</PopoverTrigger>
				<PopoverContent className='w-max p-5'>
					<Button className='bg-[#1f4973] text-primary-foreground hover:bg-[#1f4973c5]' onClick={signOut}>
						{isLoading && <LoaderCircle size={20} className='mr-4' color='#ffff' />}
						Log Out
					</Button>
				</PopoverContent>
			</Popover>
		</div>
	)
}