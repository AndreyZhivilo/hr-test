import Link from "next/link";
import { mainMenuItems } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Input } from "./input";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import Image from "next/image";
import { Button } from "./button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/shared/ui/sheet"


const CURRENT_PAGE = 'My Info'

export function AppHeader() {
	return (
		<header className="py-[9px] bg-primary-foreground">
			<div className="container 2xl:max-w-[1456px]">
				<div className="flex items-center justify-between">
					<div className="text-black text-xl mr-4 font-semibold">HarmonyHR</div>
					<nav className="hidden xl:flex px-6 pt-8">
						<ul className="flex items-center">
							{mainMenuItems.map(item => {
								return (
									<li key={item.lable} className={cn("flex justify-center items-center p-4 rounded-tl-lg rounded-tr-lg hover:bg-primary transition-colors", item.lable === CURRENT_PAGE && 'bg-primary')}>
										<Link href={item.url} className="text-black text-lg font-normal">{item.lable}</Link>
									</li>
								)
							})}
						</ul>
					</nav>
					<Input
						className="hidden md:block w-auto pl-10 pr-4 py-2 mr-4 rounded-xl border border-black text-black text-lg font-normal max-w-[395px] bg-[url('/search-icon.svg')] bg-no-repeat bg-left-16"
						placeholder="Search"
					/>
					<Button variant="outline" size="icon" className="md:hidden border-black rounded-xl px-4 py-2 h-auto w-auto">
						<Image src='/search-icon.svg' width={16} height={16} alt="search" />
					</Button>
					<div className="flex items-center">
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
						<Avatar className="w-[38px] h-[38px] cursor-pointer">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>

				</div>
			</div>
		</header>
	)
}