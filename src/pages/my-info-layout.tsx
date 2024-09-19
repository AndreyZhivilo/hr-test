import { ReactNode } from "react";
import { AppHeader } from "@/shared/ui/app-header";
import { DashboardHeader } from "@/features/user-dashboard/ui/dashboard-header";

export function MyInfoLayout({ children }: { children: ReactNode }) {

	return (
		<>
			<AppHeader />
			<main>
				<DashboardHeader />
				{children}
			</main>
		</>
	)
}

MyInfoLayout.theme = 'light'