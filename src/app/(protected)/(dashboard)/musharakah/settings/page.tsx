"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";

export default function MurabahaSettingsPage() {
	const [activeTab, setActiveTab] = useState("general");

	return (
		<div className="p-4 sm:p-6">
			<h1 className="text-2xl font-bold mb-6">Murabaha Settings</h1>

			<div className="flex flex-col md:flex-row gap-6">
				{/* Sidebar */}
				<div className="w-full md:w-64 bg-card rounded-xl shadow-sm p-4">
					<nav className="space-y-1">
						{[
							{ id: "general", label: "General Settings" },
							{ id: "notifications", label: "Notifications" },
							{ id: "compliance", label: "Compliance Rules" },
							{ id: "templates", label: "Contract Templates" },
							{ id: "integrations", label: "Integrations" },
							{ id: "permissions", label: "User Permissions" },
						].map((item) => (
							<button
								key={item.id}
								onClick={() => setActiveTab(item.id)}
								className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
									activeTab === item.id
										? "bg-amber-100 text-amber-900 dark:bg-amber-900/20 dark:text-amber-300"
										: "hover:bg-muted text-muted-foreground"
								}`}
							>
								{item.label}
							</button>
						))}
					</nav>
				</div>

				{/* Content */}
				<div className="flex-1 bg-card rounded-xl shadow-sm p-4 sm:p-6">
					{activeTab === "general" && (
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
							<h2 className="text-xl font-semibold mb-4">General Settings</h2>

							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium mb-1">Product Name</label>
									<input
										type="text"
										defaultValue="Murabaha Financing"
										className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-amber-200"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-1">Default Profit Rate (%)</label>
									<input
										type="number"
										defaultValue="5.5"
										className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-amber-200"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-1">
										Maximum Financing Term (months)
									</label>
									<input
										type="number"
										defaultValue="240"
										className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-amber-200"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-1">Description</label>
									<textarea
										defaultValue="Murabaha is a cost-plus financing structure where the bank purchases an asset and sells it to the customer at a marked-up price."
										rows={4}
										className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-amber-200"
									/>
								</div>

								<div className="flex items-center">
									<input
										type="checkbox"
										id="active"
										defaultChecked
										className="h-4 w-4 rounded border-border text-amber-500 focus:ring-amber-200"
									/>
									<label htmlFor="active" className="ml-2 text-sm">
										Active
									</label>
								</div>
							</div>

							<div className="pt-4 border-t border-border">
								<button className="flex items-center gap-2 px-4 py-2 bg-amber-200 hover:bg-amber-300 dark:bg-amber-300/30 dark:hover:bg-amber-300/50 rounded-lg transition-colors">
									<Save size={18} />
									<span>Save Changes</span>
								</button>
							</div>
						</motion.div>
					)}

					{activeTab !== "general" && (
						<div className="flex items-center justify-center h-64">
							<p className="text-muted-foreground">
								This settings section is not implemented in the demo
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
