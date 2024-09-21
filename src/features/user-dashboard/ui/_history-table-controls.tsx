import { cn } from '@/shared/lib';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/ui/select"
import { SelectIcon } from '../../../shared/ui/select-icon'
import { SelectResetIcon } from '@/shared/ui/select-reset-icon';

export function HistoryTableControls({ className }: { className?: string }) {
	return (
		<div className={cn('grid md:grid-cols-[auto_auto_1fr] md:grid-rows-1 grid-cols-[auto_auto] grid-rows-2 mb-4 gap-4 justify-items-start', className)}>
			<Select>
				<SelectTrigger
					triggerIcon={<SelectIcon className="relative z-20 left-2" />}
					resetIcon={<SelectResetIcon className='ml-auto cursor-pointer' />}
					className="md:w-max md:min-w-[256px] md:col-span-1 col-span-2 border border-[#7b96b0] table-select rounded-lg"
				>
					<SelectValue placeholder="Sick" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">Light</SelectItem>
					<SelectItem value="dark">Dark</SelectItem>
					<SelectItem value="system">System</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger
					triggerIcon={<SelectIcon className="relative z-20 left-2" />}
					resetIcon={<SelectResetIcon className='ml-auto cursor-pointer' />}
					className=" border border-[#7b96b0] table-select md:min-w-[96px] rounded-lg"
				>
					<SelectValue placeholder="All" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">Light</SelectItem>
					<SelectItem value="dark">Dark</SelectItem>
					<SelectItem value="system">System</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger
					triggerIcon={<SelectIcon className="relative z-20 left-2" />}
					resetIcon={<SelectResetIcon className='ml-auto cursor-pointer' />}
					className=" border border-[#7b96b0] table-select md:w-max md:justify-self-end md:min-w-[176px] rounded-lg"
				>
					<SelectValue placeholder="Balance History" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">Light</SelectItem>
					<SelectItem value="dark">Dark</SelectItem>
					<SelectItem value="system">System</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}