import { ReactNode } from "react";
import { AppHeader } from "@/shared/ui/app-header";

export function MyInfoLayout({ children }: { children: ReactNode }) {

	return (
		<>
			<AppHeader />
			<main>
				{children}
			</main>
		</>
	)
}

MyInfoLayout.theme = 'light'