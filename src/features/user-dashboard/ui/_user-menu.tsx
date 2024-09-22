'use client'

import { useState, useLayoutEffect, useEffect, useRef, useCallback } from 'react';
import { type UserMenuItem } from '@/shared/mock-data';
import { cn } from '@/shared/lib';
import Link from 'next/link';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/shared/ui/popover"

import { SelectIcon } from '@/shared/ui/select-icon'
import { Button } from '@/shared/ui/button';
import { getLastVisibleItem, getPrecalculatedWidths } from '@/shared/lib'
import { UserMenuItem as MenuItem } from './_user-menu-item';


const CURRENT_PAGE = 'Time Off'
const GAP = 16
const MORE_BTN_ID = 'more'
const MOBILE_THRESHOLD = 640



export function UserMenu({ menuItems, className }: { menuItems: UserMenuItem[], className?: string }) {
	const menuRef = useRef<HTMLUListElement>(null);
	const [lastVisibleMenuItem, setLastVisibleMenuItem] = useState(-1);
	const [isMobile, setIsMobile] = useState(false)
	const [dimensions, setDimensions] = useState<{
		itemsWidths: number[];
		moreWidth: number;
	}>({
		itemsWidths: [],
		moreWidth: 0
	});


	useLayoutEffect(() => {
		if (window.innerWidth <= MOBILE_THRESHOLD) {
			setIsMobile(true)
			return
		}
		if (!menuRef.current) return;
		const {
			moreWidth,
			itemsWidths,
			containerWidth
		} = getPrecalculatedWidths(menuRef.current, MORE_BTN_ID, GAP);

		const itemIndex = getLastVisibleItem({
			containerWidth,
			itemsWidths,
			moreBtnWidth: moreWidth
		});
		setDimensions({ moreWidth, itemsWidths });
		setLastVisibleMenuItem(itemIndex);
	}, []);


	useEffect(() => {
		const listener = () => {
			if (window.innerWidth <= MOBILE_THRESHOLD) {
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}

			if (!menuRef.current) return;

			const newIndex = getLastVisibleItem({
				containerWidth: menuRef.current.getBoundingClientRect().width,
				itemsWidths: dimensions.itemsWidths,
				moreBtnWidth: dimensions.moreWidth
			});

			if (newIndex !== lastVisibleMenuItem) {
				setLastVisibleMenuItem(newIndex);
			}
		};

		window.addEventListener("resize", listener);

		return () => {
			window.removeEventListener("resize", listener);
		};
	}, [lastVisibleMenuItem, dimensions, menuRef]);


	const isMoreBtnVisible = lastVisibleMenuItem < menuItems.length - 1;

	const visibleItems = menuItems.slice(0, lastVisibleMenuItem + 1);

	const hiddenItems = menuItems.slice(lastVisibleMenuItem + 1)

	const moreBtn = (
		<Popover>
			<PopoverTrigger asChild>
				<Button className='shadow-none text-black'>
					Еще
					<SelectIcon className="ml-2" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='flex flex-col gap-4 items-start'>
				{hiddenItems.map(item => {
					return (
						<Link key={item.label} href={item.url} className="text-black text-sm font-medium w-max mb-4">{item.label}</Link>
					)
				})}
			</PopoverContent>
		</Popover>
	)

	if (isMobile) {
		return (
			<nav className={cn('overflow-x-auto no-scrollbar', className)}>
				<ul className='flex items-center gap-4' ref={menuRef}>
					{menuItems.map(item => (
						<MenuItem label={item.label} url={item.url} isActive={item.label === CURRENT_PAGE} />
					))}
				</ul>
			</nav>
		)
	}

	if (lastVisibleMenuItem === -1) {
		return (
			<nav className={cn('overflow-x-auto no-scrollbar', className)}>
				<ul className='flex items-center gap-4' ref={menuRef}>
					{menuItems.map(item => (
						<MenuItem label={item.label} url={item.url} isActive={item.label === CURRENT_PAGE} />
					))}
					<li id={MORE_BTN_ID}>
						{moreBtn}
					</li>
				</ul>
			</nav>
		)
	}

	return (
		<nav className={cn('overflow-x-auto no-scrollbar', className)} >
			<ul className='flex items-center gap-4' ref={menuRef}>
				{visibleItems.map(item => (
					<MenuItem label={item.label} url={item.url} isActive={item.label === CURRENT_PAGE} />
				))}
				{isMoreBtnVisible && (
					<li id={MORE_BTN_ID}>
						{moreBtn}
					</li>
				)}
			</ul>
		</nav>
	)
}