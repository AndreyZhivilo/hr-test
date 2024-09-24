import Image from 'next/image'
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui/button';
import { InfoCard } from './_info-card';

export function SectionTimeOff({ className }: { className?: string }) {
	return (
		<section className={cn(className)}>
			<div className="flex border-[2px] border-transparent border-b-[#7C96B1] md:justify-between justify-end pb-[13px]">
				<div className="hidden md:flex gap-[12px]">
					<Image src='/shedule-icon.svg' width={16} height={16} alt='time off' />
					<h2 className='text-[#1f4973] text-xl font-medium'>Time Off</h2>
				</div>
				<div className="flex md:items-center gap-x-[30px] gap-y-2 flex-col md:flex-row items-end">
					<div>
						<span className="text-black text-sm font-medium mr-2">Accrual Level Start Date</span>
						<span className="text-[#3757aa] text-sm font-medium">03/09-2020</span>
					</div>
					<Button className='border border-black text-black bg-transparent'>
						Add Time Off Policy
					</Button>
				</div>
			</div>
			<div className="grid grid-cols-[minmax(250px,_1fr)_minmax(250px,_1fr)_minmax(250px,_1fr)] pt-[24px] pb-[49px] gap-x-[48px] lg:px-[65px] overflow-x-scroll no-scrollbar">
				<InfoCard
					title='Sick'
					subTitle='Days Available'
					description='1 dey scheduled'
					icon='/med-icon.svg'
					count={3}
					caption='Sick Full-Time'
				/>
				<InfoCard
					title='Annual Leave'
					subTitle='Days Available'
					icon='/mountain-icon.svg'
					count={10.3}
					caption='Holiday Full-Time'
				/>
				<InfoCard
					title='Comp/in Lieu Time'
					subTitle='Human Used(YTD)'
					icon='/shedule-icon.svg'
					count={0}
					caption='Comp/in Lieu Time Flexible Policy'
				/>
			</div>
		</section>
	)
}