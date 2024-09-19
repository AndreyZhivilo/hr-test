import { cn } from '@/shared/lib'

export function SelectIcon({ className }: { className?: string }) {
	return (
		<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180', className)}>
			<path fillRule="evenodd" clipRule="evenodd" d="M8.56441 11.2604L8.00616 10.6818L7.44792 11.2604C7.75623 11.5799 8.2561 11.5799 8.56441 11.2604ZM8.00616 9.52473L4.35388 5.73964C4.04557 5.42012 3.5457 5.42012 3.2374 5.73964C2.92909 6.05916 2.92909 6.5772 3.2374 6.89672L7.44792 11.2604L8.00616 10.6818L8.56441 11.2604L12.7749 6.89672C13.0832 6.5772 13.0832 6.05916 12.7749 5.73964C12.4666 5.42012 11.9668 5.42012 11.6584 5.73964L8.00616 9.52473Z" fill="#1C3144" />
		</svg>
	)
}