import { cn } from '@/shared/lib';
import { SidebarSection } from './_sidebar-section';
import { SidebarItem } from './_sidebar-item';
import Link from 'next/link';
import Image from 'next/image'
import {
	CollapsibleText,
} from "@/shared/ui/collapsible-text"


export function UserSidebar({ className }: { className?: string }) {
	return (
		<div className={cn('text-[14px]', className)}>
			<SidebarSection>
				<SidebarItem label='07911 654321' url='tel:07911654321' icon='/phone-icon.svg' className='mb-[16px]' />
				<SidebarItem label='avd.yana@videorollnet' url='mailto:avd.yana@videorollnet' icon='/mail-icon.svg' className='mb-[16px]' />
				<div className="flex gap-[14px]">
					<Link href='#'>
						<Image src='/linked-in-icon.svg' width={16} height={16} alt='linkedIn' />
					</Link>
					<Link href='#'>
						<Image src='/facebook-icon.svg' width={16} height={16} alt='facebook' />
					</Link>
					<Link href='#'>
						<Image src='/twitter-icon.svg' width={16} height={16} alt='twitter' />
					</Link>
				</div>
			</SidebarSection>
			<SidebarSection>
				<SidebarItem label='Hire Date' className='mb-[16px]' />
				<SidebarItem label='Sep. 3,2020' />
				<SidebarItem label='3y - 9m - 20d' />
			</SidebarSection>
			<SidebarSection>
				<SidebarItem label='5' icon='/hash-icon.svg' />
				<SidebarItem label='Full-Time' icon='/time-icon.svg' />
				<SidebarItem label='Operations' icon='/operations-icon.svg' />
				<SidebarItem label='Europe' icon='/world-icon.svg' />
				<SidebarItem label='London' icon='/geo-icon.svg' />
			</SidebarSection>
			<SidebarSection>
				<SidebarItem label='Direct Records' className='mb-[16px]' />
				<SidebarItem label='Shane' icon='/user-icon.svg' />
				<SidebarItem label='Nathan' icon='/user-icon.svg' />
				<SidebarItem label='Mitchell' icon='/user-icon.svg' />
				<SidebarItem label='Philip' icon='/user-icon.svg' />
				<CollapsibleText
					triggerTextClosed={<SidebarItem label='4 More...' icon='/operations-icon.svg' />}
					triggerTextOpened={<SidebarItem label='Show less' icon='/operations-icon.svg' />}
				>
					<SidebarItem label='Shane' icon='/user-icon.svg' />
					<SidebarItem label='Nathan' icon='/user-icon.svg' />
					<SidebarItem label='Mitchell' icon='/user-icon.svg' />
					<SidebarItem label='Philip' icon='/user-icon.svg' />
				</CollapsibleText>


			</SidebarSection>
		</div>
	)
}