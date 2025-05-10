"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChartIcon, ContractItem, TabButton, StatCard, WorkloadChart } from "@/components/shared/common-components";

export default function IjarahOverviewPage() {
	const [activeTab, setActiveTab] = useState("overview");

	return (
		<div className="flex flex-col">
			{/* Tabs */}
			<div className="px-4 sm:px-8 border-b border-border">
				<div className="flex overflow-x-auto">
					<TabButton active={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
						Overview
					</TabButton>
					<TabButton active={activeTab === "mytasks"} onClick={() => setActiveTab("mytasks")}>
						MyTasks
					</TabButton>
					<TabButton active={activeTab === "analytics"} onClick={() => setActiveTab("analytics")}>
						Analytics
					</TabButton>
					<TabButton active={activeTab === "leases"} onClick={() => setActiveTab("leases")}>
						Leases
					</TabButton>
				</div>
			</div>

			{/* Dashboard Content */}
			<div className="flex-1 p-4 sm:p-6 overflow-auto">
				<AnimatePresence mode="wait">
					{activeTab === "overview" && (
						<motion.div
							key="overview"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{/* Stats Cards */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 }}
									className="bg-card rounded-xl shadow-sm p-4 sm:p-6"
								>
									<StatCard title="Active Leases" value="18" icon={<ChartIcon />} />
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
									className="bg-card rounded-xl shadow-sm p-4 sm:p-6"
								>
									<StatCard title="Pending Approvals" value="7" icon={<ChartIcon />} />
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
									className="bg-card rounded-xl shadow-sm p-4 sm:p-6"
								>
									<StatCard title="Expiring Soon" value="3" icon={<ChartIcon />} />
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									className="bg-card rounded-xl shadow-sm p-4 sm:p-6"
								>
									<StatCard title="Total Assets" value="42" icon={<ChartIcon />} />
								</motion.div>
							</div>

							{/* Main Content Grid */}
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
								{/* Department Workload */}
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 }}
									className="lg:col-span-2 bg-card rounded-xl shadow-sm p-4 sm:p-6"
								>
									<h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
										Asset Category Distribution
									</h2>
									<p className="text-muted-foreground text-sm mb-6">By lease value</p>

									<div className="h-64 relative">
										<WorkloadChart />

										<div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs sm:text-sm text-muted-foreground pt-2">
											<div className="text-center">Real Estate</div>
											<div className="text-center">Vehicles</div>
											<div className="text-center">Equipment</div>
											<div className="text-center">
												Commercial
												<br />
												Property
											</div>
											<div className="text-center">
												Industrial
												<br />
												Assets
											</div>
										</div>
									</div>
								</motion.div>

								{/* Recent Submissions */}
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6 }}
									className="bg-card rounded-xl shadow-sm p-4 sm:p-6"
								>
									<h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
										Recent Leases
									</h2>
									<p className="text-muted-foreground text-sm mb-6">
										Latest lease agreements requiring review
									</p>

									<div className="space-y-4">
										{[1, 2, 3, 4, 5].map((item) => (
											<ContractItem key={item} type="ijarah" />
										))}
									</div>

									<Link
										href="/dashboard/ijarah/contracts"
										className="block w-full mt-6 bg-amber-200 hover:bg-amber-300 dark:bg-amber-300/30 dark:hover:bg-amber-300/50 py-3 rounded-lg font-medium transition-colors text-center"
									>
										View all
									</Link>
								</motion.div>
							</div>
						</motion.div>
					)}

					{activeTab !== "overview" && (
						<motion.div
							key={activeTab}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="h-full flex items-center justify-center"
						>
							<div className="text-center p-12">
								<h2 className="text-2xl font-bold text-muted-foreground mb-4">
									{activeTab === "mytasks"
										? "My Tasks"
										: activeTab === "analytics"
										? "Analytics"
										: "Leases"}{" "}
									View
								</h2>
								<p className="text-muted-foreground">This tab content is not implemented in the demo</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
