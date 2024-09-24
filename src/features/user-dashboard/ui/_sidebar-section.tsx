import { ReactNode } from 'react';
import { cn } from '@/shared/lib';

export function SidebarSection({ className, children }: { className?: string, children: ReactNode }) {
	return (
		<div className={cn('bg-[#fcfcfe] rounded-xl mb-[16px] px-[24px] pt-[24px] pb-[16px]', className)}>{children}</div>
	)
}