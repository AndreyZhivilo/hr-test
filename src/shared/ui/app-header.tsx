import Link from "next/link";
import { mainMenuItems } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Input } from "./input";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"


const CURRENT_PAGE = 'My Info'

export function AppHeader({ slug }: { slug: string }) {
	return (
		<header className="bg-primary-foreground">
			<div className="container">
				<div className="flex items-center">
					<div className="text-black text-xl font-semibold">HarmonyHR</div>
					<nav className="w-[1440px] h-[86px] px-6 pt-8  justify-between items-start inline-flex">
						<ul className="flex items-center">
							{mainMenuItems.map(item => {
								return (
									<div key={item.lable} className={cn("p-4 rounded-tl-lg rounded-tr-lg justify-center items-center gap-2.5 flex", item.lable === CURRENT_PAGE && 'bg-primary')}>
										<Link href={item.url} className="text-black text-lg font-normal">{item.lable}</Link>
									</div>
								)
							})}
						</ul>
					</nav>
					<Input className="h-[38px] px-4 py-2 rounded-xl border border-black text-black text-lg font-normal max-w-[395px]" placeholder="Search" />
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</header>
	)
}