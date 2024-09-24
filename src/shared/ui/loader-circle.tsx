export function LoaderCircle({ size = 40, color = '#007bff', className }: { size?: number, color?: string, className?: string }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 50 50"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<circle
				cx="25"
				cy="25"
				r="20"
				fill="none"
				stroke={color}
				strokeWidth="5"
				strokeLinecap="round"
				strokeDasharray="94.25 31.42"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					repeatCount="indefinite"
					dur="1s"
					values="0 25 25;360 25 25"
					keyTimes="0;1"
				/>
			</circle>
		</svg>
	);
}