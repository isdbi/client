"use client";

import { motion } from "framer-motion";

export function TabButton({
	children,
	active,
	onClick,
}: {
	children: React.ReactNode;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`py-3 px-6 font-medium text-sm whitespace-nowrap relative ${
				active ? "text-amber-500" : "text-muted-foreground hover:text-foreground"
			}`}
		>
			{children}
			{active && (
				<motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
			)}
		</button>
	);
}

export function StatCard({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) {
	return (
		<div className="flex items-center gap-4">
			<div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">{icon}</div>
			<div>
				<p className="text-muted-foreground text-sm">{title}</p>
				<p className="text-foreground text-2xl font-bold">{value}</p>
			</div>
		</div>
	);
}

export function ChartIcon() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" className="text-amber-500" />
			<path d="M8 17L12 21L16 17" stroke="currentColor" strokeWidth="2" className="text-amber-500 opacity-30" />
		</svg>
	);
}

export function WorkloadChart() {
	const barHeights = [
		{ height: "80%", delay: 0.1 },
		{ height: "95%", delay: 0.2 },
		{ height: "60%", delay: 0.3 },
		{ height: "75%", delay: 0.4 },
		{ height: "50%", delay: 0.5 },
	];

	return (
		<div className="flex justify-around items-end h-full relative">
			{/* Chart grid lines */}
			<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
				<div className="w-full h-px bg-border"></div>
				<div className="w-full h-px bg-border"></div>
				<div className="w-full h-px bg-border"></div>
				<div className="w-full h-px bg-border"></div>
				<div className="w-full h-px bg-border"></div>
			</div>

			{/* Legend */}
			<div className="absolute right-0 top-0 flex items-center gap-1 text-xs text-amber-500">
				<span>100%</span>
			</div>
			<div className="absolute right-0 bottom-0 flex items-center gap-1 text-xs text-muted-foreground">
				<span>0%</span>
			</div>

			{/* Bars */}
			{barHeights.map((bar, index) => (
				<motion.div
					key={index}
					initial={{ height: "0%" }}
					animate={{ height: bar.height }}
					transition={{ duration: 1, delay: bar.delay }}
					className="w-12 sm:w-16 bg-blue-100 bg-opacity-20 rounded-md relative group dark:bg-blue-900/10"
				>
					<motion.div
						initial={{ height: "0%" }}
						animate={{ height: "100%" }}
						transition={{ duration: 1, delay: bar.delay }}
						className="absolute bottom-0 w-full bg-blue-100 dark:bg-blue-900/30 rounded-md"
					/>
				</motion.div>
			))}
		</div>
	);
}

export function ContractItem({ type = "murabaha", expanded = false }) {
	const getTypeDetails = (type: any) => {
		switch (type) {
			case "ijarah":
				return { title: "Ijarah Equipment Lease", entity: "Al Futtaim Group" };
			case "musharakah":
				return {
					title: "Musharakah Joint Venture",
					entity: "Dubai Properties",
				};
			case "sukuk":
				return { title: "Sukuk Al-Ijarah Issuance", entity: "Emirates NBD" };
			default:
				return {
					title: "Murabaha Home Financing Contract",
					entity: "Dubai Islamic Bank",
				};
		}
	};

	const { title, entity } = getTypeDetails(type);

	return (
		<div
			className={`flex items-center gap-4 ${
				expanded ? "p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors" : ""
			}`}
		>
			<div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center">
				<ChartIcon />
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-foreground font-medium truncate">{title}</p>
				<p className="text-muted-foreground text-sm">{entity}</p>
			</div>
			<div className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-xs font-medium dark:bg-amber-900/20">
				High
			</div>
		</div>
	);
}

export function ComplianceItem({
	label,
	status,
}: {
	label: string;
	status: "compliant" | "needs-review" | "non-compliant";
}) {
	const statusColors = {
		compliant: "bg-green-100 text-green-700 dark:bg-green-900/20",
		"needs-review": "bg-amber-100 text-amber-700 dark:bg-amber-900/20",
		"non-compliant": "bg-red-100 text-red-500 dark:bg-red-900/20",
	};

	const statusText = {
		compliant: "Compliant",
		"needs-review": "Needs Review",
		"non-compliant": "Not Compliant",
	};

	return (
		<div className="flex justify-between items-center">
			<span className="text-muted-foreground">{label}</span>
			<span className={`text-xs py-1 px-3 rounded-full ${statusColors[status]}`}>{statusText[status]}</span>
		</div>
	);
}
