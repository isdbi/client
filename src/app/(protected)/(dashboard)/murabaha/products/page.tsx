"use client";

import { motion } from "framer-motion";
import { Search, Filter, Plus, Home, Car, Building, ShoppingBag } from "lucide-react";

export default function MurabahaProductsPage() {
	return (
		<div className="p-4 sm:p-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
				<h1 className="text-2xl font-bold">Murabaha Products</h1>

				<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
					<div className="relative w-full sm:w-64">
						<input
							type="text"
							placeholder="Search products..."
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
						<span>New Product</span>
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
				{[
					{ name: "Home Financing", icon: <Home size={24} />, count: 24 },
					{ name: "Auto Financing", icon: <Car size={24} />, count: 18 },
					{
						name: "Commercial Property",
						icon: <Building size={24} />,
						count: 12,
					},
					{
						name: "Inventory Financing",
						icon: <ShoppingBag size={24} />,
						count: 9,
					},
				].map((product, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
						className="bg-card rounded-xl shadow-sm p-6 border border-border hover:border-amber-200 transition-colors cursor-pointer"
					>
						<div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-lg flex items-center justify-center mb-4 text-amber-500">
							{product.icon}
						</div>
						<h3 className="text-lg font-semibold mb-2">{product.name}</h3>
						<p className="text-muted-foreground text-sm mb-4">
							Murabaha financing for {product.name.toLowerCase()}
						</p>
						<div className="flex justify-between items-center">
							<span className="text-sm text-muted-foreground">{product.count} active contracts</span>
							<span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full dark:bg-green-900/20">
								Active
							</span>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
