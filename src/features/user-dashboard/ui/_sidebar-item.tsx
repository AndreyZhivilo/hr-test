import { cn } from '@/shared/lib';
import Image from 'next/image'
import Link from 'next/link';

export function SidebarItem({ label, icon, url, className }: { label: string, icon?: string, url?: string, className?: string }) {
	return (
		<div className={cn('flex mb-[8px]', className)}>
			{icon && <Image src={icon} width={16} height={16} alt={label} aria-hidden="true" className='mr-[8px]' />}
			{url ? <Link href={url}>{label}</Link> : <span className='block'>{label}</span>}
		</div>
	)
}