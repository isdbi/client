"use client";

import { motion } from "framer-motion";
import { Search, Filter, Plus, User } from "lucide-react";

export default function MurabahaUsersPage() {
	return (
		<div className="p-4 sm:p-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
				<h1 className="text-2xl font-bold">Murabaha Users</h1>

				<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
					<div className="relative w-full sm:w-64">
						<input
							type="text"
							placeholder="Search users..."
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
						<span>New User</span>
					</button>
				</div>
			</div>

			<div className="bg-card rounded-xl shadow-sm overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b border-border">
								<th className="text-left p-4 font-medium text-muted-foreground">Name</th>
								<th className="text-left p-4 font-medium text-muted-foreground">Role</th>
								<th className="text-left p-4 font-medium text-muted-foreground">Email</th>
								<th className="text-left p-4 font-medium text-muted-foreground">Status</th>
								<th className="text-left p-4 font-medium text-muted-foreground">Last Active</th>
							</tr>
						</thead>
						<tbody>
							{[
								{
									name: "Ahmed Al-Farsi",
									role: "Shariah Advisor",
									email: "ahmed@example.com",
									status: "Active",
									lastActive: "Just now",
								},
								{
									name: "Fatima Rahman",
									role: "Legal Reviewer",
									email: "fatima@example.com",
									status: "Active",
									lastActive: "5 min ago",
								},
								{
									name: "Mohammed Ali",
									role: "Risk Analyst",
									email: "mohammed@example.com",
									status: "Away",
									lastActive: "1 hour ago",
								},
								{
									name: "Aisha Malik",
									role: "Compliance Officer",
									email: "aisha@example.com",
									status: "Active",
									lastActive: "30 min ago",
								},
								{
									name: "Omar Khan",
									role: "Product Manager",
									email: "omar@example.com",
									status: "Offline",
									lastActive: "2 days ago",
								},
							].map((user, index) => (
								<motion.tr
									key={index}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.05 }}
									className="border-b border-border hover:bg-muted/30 cursor-pointer"
								>
									<td className="p-4">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center">
												<User size={16} className="text-amber-500" />
											</div>
											<span>{user.name}</span>
										</div>
									</td>
									<td className="p-4">{user.role}</td>
									<td className="p-4">{user.email}</td>
									<td className="p-4">
										<span
											className={`inline-block px-2 py-1 rounded-full text-xs ${
												user.status === "Active"
													? "bg-green-100 text-green-700 dark:bg-green-900/20"
													: user.status === "Away"
														? "bg-amber-100 text-amber-700 dark:bg-amber-900/20"
														: "bg-gray-100 text-gray-700 dark:bg-gray-800"
											}`}
										>
											{user.status}
										</span>
									</td>
									<td className="p-4 text-muted-foreground">{user.lastActive}</td>
								</motion.tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
