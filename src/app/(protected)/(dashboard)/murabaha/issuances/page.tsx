"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Plus } from "lucide-react";
import { ContractItem } from "@/components/shared/common-components";

export default function SukukIssuancesPage() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="p-4 sm:p-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
				<h1 className="text-2xl font-bold">Sukuk Issuances</h1>

				<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
					<div className="relative w-full sm:w-64">
						<input
							type="text"
							placeholder="Search issuances..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
						<Search className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
					</div>

					<button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
						<Filter size={18} />
						<span>Filter</span>
					</button>

					<button className="flex items-center gap-2 px-4 py-2 bg-amber-200 hover:bg-amber-300 dark:bg-amber-300/30 dark:hover:bg-amber-300/50 rounded-lg transition-colors">
						<Plus size={18} />
						<span>New Issuance</span>
					</button>
				</div>
			</div>

			<div className="bg-card rounded-xl shadow-sm p-4 sm:p-6">
				<div className="grid grid-cols-1 gap-4">
					{Array.from({ length: 10 }).map((_, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.05 }}
						>
							<ContractItem type="sukuk" expanded />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
