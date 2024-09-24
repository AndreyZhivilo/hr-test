import * as React from "react"

import { cn } from "@/shared/lib/utils"


export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, error = false, ...props }, ref) => (
		<input
			type={type}
			className={cn(
				"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
				className,
				error && 'outline outline-red-400 outline-1 focus-visible:outline focus-visible:outline-red-400'
			)}
			ref={ref}
			{...props}
		/>
	)
)
Input.displayName = "Input"

export { Input }
