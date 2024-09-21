'use client'

import { cn } from '@/shared/lib';
import Image from 'next/image'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/shared/ui/table"
import {
	type SortingState,
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	getSortedRowModel
} from "@tanstack/react-table"

import { type TableRowType, tableData } from '@/shared/mock-data'
import { formatDate } from '@/shared/lib'
import { Button } from '@/shared/ui/button';
import { useState } from 'react';

export function HistoryTable({ className }: { className?: string }) {
	const [sorting, setSorting] = useState<SortingState>([])

	const columns: ColumnDef<TableRowType>[] = [
		{
			accessorKey: "date",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
						className='hover:bg-transparent'
					>
						Date
						<Image src='/sort-arrow-icon.svg' width={16} height={16} aria-hidden="true" alt='sort' />
					</Button>
				)
			},
			cell: ({ row }) => {
				const date = String(row.getValue("date"))
				const formatted = formatDate(date)
				return <>{formatted}</>
			}
		},
		{
			accessorKey: "description",
			header: "Description",
		},
		{
			accessorKey: "usedDays",
			header: "Used Days (-)",
			cell: ({ row }) => {
				const days = Number(row.getValue("usedDays"))
				return days === 0 ? <></> : <>{days}</>
			}
		},
		{
			accessorKey: "earnedDays",
			header: "Earned Days (+)",
			cell: ({ row }) => {
				const days = Number(row.getValue("earnedDays"))
				return days ? <>{days.toFixed(1)}</> : <></>
			}
		},
		{
			accessorKey: "balance",
			header: "Balance",
			cell: ({ row }) => {
				const days = Number(row.getValue("balance")).toFixed(1)
				return <>{days}</>
			}
		}
	]

	const table = useReactTable({
		data: tableData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting,
		},
	})
	return (
		<div className={cn('overflow-x-auto no-scrollbar', className)}>
			<Table>
				<TableHeader className='bg-primary'>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id} className='text-black text-nowrap'>
										{header.isPlaceholder
											? null
											: flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody className='text-black text-sm font-medium'>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
								className='border-transparent border-b-[#7C96B1] border-[2px]'
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id} className='text-nowrap'>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}