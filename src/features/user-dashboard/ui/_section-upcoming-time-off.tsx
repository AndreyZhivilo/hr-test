import { cn } from '@/shared/lib';
import Image from 'next/image'

export function SectionUpcomingTimeOff({ className }: { className?: string }) {
	return (
		<section className={cn('text-black text-sm font-medium', className)}>
			<div className="flex border-[2px] border-transparent border-b-[#7C96B1] justify-between pb-[13px]">
				<div className="hidden md:flex gap-[12px]">
					<Image src='/time-icon.svg' width={16} height={16} alt='upcoming time off' />
					<h2 className="text-[#1f4973] text-sm font-medium">Upcoming Time Off</h2>
				</div>
			</div>
			<div className="flex gap-x-[14px] py-[24px] border-[2px] border-transparent border-b-[#7C96B1]">
				<Image src='/med-icon.svg' width={30} height={30} alt='med-icon' aria-hidden="true" />
				<div className="flex flex-col gap-y-[4px]">
					<span>Jan 27</span>
					<div className="flex items-center">
						<div className="w-2 h-2 bg-[#1c3144] rounded-full mr-[4px]"></div>
						<span>1 dey of Sick</span>
					</div>
				</div>
			</div>
			<div className="flex gap-x-[14px] py-[24px] border-[2px] border-transparent border-b-[#7C96B1]">
				<Image src='/pig-icon.svg' width={30} height={30} alt='pig-icon' aria-hidden="true" />
				<div className="flex flex-col  gap-y-[4px]">
					<span>Jul 4</span>
					<span>Independence Day</span>
				</div>
			</div>
		</section>
	)
}