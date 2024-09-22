'use client'

import Image from "next/image";
import { DashboardControls } from "./_dashboard-controls";
import { UserMenu } from "./_user-menu";
import { userMenuItems } from '@/shared/mock-data';
import { useSession } from "@/features/auth/model";

export function DashboardHeader() {
	const { currentSession } = useSession()
	if (!currentSession) return null
	return (
		<div className="bg-primary">
			<div className="container 2xl:max-w-[1361px]">
				<div className="grid grid-cols-[60px_1fr_auto] md:grid-cols-[225px_1fr_auto] grid-rows-[1fr_auto] gap-x-[22px] md:gap-x-[25px] min-h-[157px] md:min-h-[184px]">
					<Image
						className="w-[60px] h-[60px] md:w-[150px] md:h-[150px] rounded-full self-center md:self-end md:row-span-2 relative z-50 ml-[24px] md:ml-0 justify-self-center"
						src={currentSession.avatar}
						width={150}
						height={150}
						alt='user avatar'
					/>
					<h1 className="text-black text-[20px] md:text-[28px] font-semibold self-center ml-[24px] md:ml-0">{currentSession.name}</h1>
					<DashboardControls className="self-start md:self-center justify-self-end mr-[24px] md:mr-0" />
					<UserMenu menuItems={userMenuItems} className="col-[1_/_span_3] md:col-[2_/_span_2] self-end" />
				</div>
			</div>
		</div>
	)
}