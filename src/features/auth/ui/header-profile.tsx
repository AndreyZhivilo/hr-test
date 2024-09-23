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

export function HeaderProfile({ img, className }: { img?: string, className?: string }) {
	const { signOut } = useSignOut()
	return (
		<div className={cn(className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Avatar>
						{img && <AvatarImage src={img} alt="@shadcn" className='cursor-pointer' />}
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</PopoverTrigger>
				<PopoverContent className="w-80">
					<Button onClick={signOut}>
						Log OUT
					</Button>
				</PopoverContent>
			</Popover>
		</div>
	)
}