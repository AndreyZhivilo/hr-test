import Image from 'next/image'
import { cn } from '@/shared/lib';

export function InfoCard({
	icon,
	count,
	title,
	subTitle,
	caption,
	description,
	className
}: {
	icon: string,
	count: number,
	title: string,
	subTitle: string,
	caption: string,
	description?: string,
	className?: string
}) {
	return (
		<div className="flex flex-col items-center">
			<div className={cn("flex flex-col w-full grow bg-[#f0f3f8] rounded-lg  justify-center items-center gap-1 p-[16px] mb-[8px]", className)}>
				<div className="self-stretch text-center text-black text-xl font-semibold">{title}</div>
				<div className="justify-start items-center gap-2.5 inline-flex">
					<Image src={icon} width={30} height={30} aria-hidden='true' alt='icon' />
					<div className="text-[#1c3144] text-3xl font-semibold">{count}</div>
				</div>
				<div className="self-stretch text-center text-black text-sm font-semibold">{subTitle}</div>
				<div className="self-stretch text-center text-[#7c96b1] text-sm font-semibold">{description}</div>
			</div>
			<div className="text-[#7c96b1] text-sm font-medium">{caption}</div>
		</div>
	)
}