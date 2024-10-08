import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { mainMenuItems } from '@/shared/mock-data'
import { cn } from '@/shared/lib'
import { Input } from "./input";
import { Button } from "./button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/shared/ui/sheet"


const CURRENT_PAGE = 'My Info'

export function AppHeader({ profile }: { profile: ReactNode }) {
	return (
		<header className="md:py-[9px] xl:py-0 bg-primary-foreground">
			<div className="container 2xl:max-w-[1393px] px-[24px] md:px-0">
				<div className="grid grid-cols-[auto_1fr_auto] xl:grid-cols-[auto_1fr_minmax(100px,_395px)_auto] items-center gap-[21px]">
					<Link href='/' className="text-black text-xl mr-4 font-semibold">HarmonyHR</Link>
					<nav className="hidden xl:flex px-6 pt-[26px]">
						<ul className="flex items-center">
							{mainMenuItems.map(item => (
								<li key={item.lable} className={cn("flex justify-center items-center p-4 rounded-tl-lg rounded-tr-lg hover:bg-primary transition-colors", item.lable === CURRENT_PAGE && 'bg-primary')}>
									<Link href={item.url} className="text-black text-lg font-normal w-max">{item.lable}</Link>
								</li>
							))}
						</ul>
					</nav>
					<Input
						className="hidden md:block pl-10 pr-4 py-2 rounded-xl border border-black text-black text-lg font-normal bg-[url('/search-icon.svg')] bg-no-repeat bg-left-16 xl:translate-y-[8px]"
						placeholder="Search"
					/>
					<Button variant="outline" size="icon" className="md:hidden border-black rounded-xl px-4 py-2 h-auto w-auto justify-self-center">
						<Image src='/search-icon.svg' width={16} height={16} alt="search" />
					</Button>
					<div className="flex items-center xl:translate-y-[7px]">
						<div className="hidden xl:flex gap-[24px] mr-[24px]">
							<Image className="cursor-pointer" src='/settings-icon.svg' width={24} height={24} alt="notifications" />
							<Image className="cursor-pointer" src='/help-me-icon.svg' width={24} height={24} alt="notifications" />
							<Image className="cursor-pointer" src='/notifications-icon.svg' width={24} height={24} alt="notifications" />
						</div>
						<Sheet>
							<SheetTrigger className="xl:hidden border-none bg-transparent h-auto w-auto p-3 shadow-none">
								<Image src='/hamburger-icon.svg' width={24} height={24} alt="open-menu" />
							</SheetTrigger>
							<SheetContent className="bg-white">
								<ul className="flex flex-col">
									{mainMenuItems.map(item => (
										<li key={item.lable} className="mb-4">
											<Link href={item.url}>{item.lable}</Link>
										</li>
									))}
								</ul>
								<div className="flex gap-5">
									<Image className="cursor-pointer" src='/settings-icon.svg' width={24} height={24} alt="notifications" />
									<Image className="cursor-pointer" src='/help-me-icon.svg' width={24} height={24} alt="notifications" />
									<Image className="cursor-pointer" src='/notifications-icon.svg' width={24} height={24} alt="notifications" />
								</div>
							</SheetContent>
						</Sheet>
						{profile}
					</div>

				</div>
			</div>
		</header>
	)
}