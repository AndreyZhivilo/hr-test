import Image from 'next/image'
import { cn } from '@/shared/lib';
import { HistoryTable } from './_history-table';
import { HistoryTableControls } from './_history-table-controls';


export function HistorySection({ className }: { className?: string }) {
	return (
		<section className={cn('pt-[24px] pb-[400px]', className)}>
			<div className="flex items-center mb-[16px]">
				<Image src='/history-icon.svg' width={16} height={14} alt='history' aria-hidden="true" className='mr-[8px]' />
				<h2 className="text-[#1f4973] text-sm font-medium">History</h2>
			</div>
			<HistoryTableControls />
			<HistoryTable />

		</section>
	)
}