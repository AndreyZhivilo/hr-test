import Link from 'next/link';
import { cn } from '@/shared/lib';

export function UserMenuItem({
	label,
	url,
	isActive,
	className
}: {
	label: string,
	url: string,
	isActive: boolean,
	className?: string
}) {
	return (
		<li className={cn("grow shrink basis-0 h-[49px] p-4 rounded-tl-lg rounded-tr-lg justify-center items-center gap-2.5 flex hover:bg-white transition-colors",
			isActive && 'bg-[#fcfcfe]',
			className
		)}>
			<Link href={url} className="text-black text-sm font-medium w-max">{label}</Link>
		</li>

	)
}