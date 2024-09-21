import { ReactNode } from "react";
import { AppHeader } from "@/shared/ui/app-header";
import { DashboardHeader } from "@/features/user-dashboard/ui/dashboard-header";
import { UserSidebar } from "@/features/user-dashboard/ui/user-sidebar";

export function MyInfoLayout({ children }: { children: ReactNode }) {

	return (
		<>
			<AppHeader />
			<main className="bg-[#F0F3F8]">
				<DashboardHeader />
				<div className="container 2xl:max-w-[1361px]">
					<div className="lg:grid lg:gap-x-[25px] lg:grid-cols-[225px_1fr]">
						<UserSidebar className="relative z-40 bottom-4 hidden lg:block" />
						{children}
					</div>
				</div>
			</main>
		</>
	)
}

MyInfoLayout.theme = 'light'