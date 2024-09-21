import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui/button';
import Image from 'next/image'
import { SectionTimeOff } from './_section-time-off';
import { SectionUpcomingTimeOff } from './_section-upcoming-time-off';
import { HistorySection } from './_history-section';

export function DashboardContent({ className }: { className?: string }) {
	return (
		<div className={cn('bg-[#fcfcfe] px-[16px] py-[41px] overflow-x-scroll no-scrollbar', className)}>
			<SectionTimeOff />
			<SectionUpcomingTimeOff />
			<HistorySection />
		</div>
	)
}