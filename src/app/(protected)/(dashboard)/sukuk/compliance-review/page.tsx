"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pen } from "lucide-react";
import { ComplianceItem, TabButton } from "@/components/shared/common-components";

export default function MurabahaComplianceReviewPage() {
	const [activeTab, setActiveTab] = useState("contract-text");

	return (
		<div className="flex-1 p-4 sm:p-6 overflow-auto">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
				{/* Contract Review */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className="lg:col-span-7 bg-card rounded-xl border p-4 sm:p-6"
				>
					<h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Contract Review</h2>
					<p className="text-muted-foreground text-sm mb-6">
						Review product structure and contractual terms for Islamic compliance
					</p>

					{/* Tabs */}
					<div className="flex overflow-x-auto">
						<TabButton active={activeTab === "contract-text"} onClick={() => setActiveTab("contract-text")}>
							Contract text
						</TabButton>
						<TabButton
							active={activeTab === "structure-analysis"}
							onClick={() => setActiveTab("structure-analysis")}
						>
							Structure Analysis
						</TabButton>
					</div>

					{/* Tab Content */}
					<div className="mt-6 relative">
						<AnimatePresence mode="wait">
							{activeTab === "contract-text" && (
								<motion.div
									key="contract"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="space-y-4"
								>
									<h3 className="text-blue-600 font-medium">Murabaha Home Financing Agreement</h3>

									<div className="mb-4">
										<h4 className="font-medium mb-2">1. Parties</h4>
										<p className="text-muted-foreground">
											This Murabaha Home Financing Agreement (the Agreement) is made between Dubai
											Islamic Bank (the Bank) and Mohammed Al Farsi (the Customer).
										</p>
									</div>

									<div className="mb-4">
										<h4 className="font-medium mb-2">2. Property Details</h4>
										<p className="text-muted-foreground">
											Villa No. 45, Palm Jumeirah, Dubai, UAE (the Property).
										</p>
									</div>

									<div className="mb-4">
										<h4 className="font-medium mb-2">3. Purchase and Sale</h4>
										<p className="text-muted-foreground">
											The Bank agrees to purchase the Property from the seller at the Purchase
											Price of AED 2,500,000 and subsequently sell it to the Customer at the Sale
											Price of AED 3,125,000, which includes the Bank is profit of AED 625,000.
										</p>
									</div>

									<div className="mb-4">
										<h4 className="font-medium mb-2">4. Payment Terms</h4>
										<p className="text-muted-foreground">
											The Customer agrees to pay the Sale Price in 120 monthly installments of AED
											26,041.67. Late payments will incur a penalty fee of 2% per month on the
											overdue amount, which will be donated to charity after deducting
											administrative costs.
										</p>
									</div>

									<div className="mb-4">
										<h4 className="font-medium mb-2">5. Ownership Transfer</h4>
										<p className="text-muted-foreground">
											Legal title to the Property shall be transferred to the Customer upon
											execution of this Agreement, while the Bank shall maintain a security
											interest until full payment of the Sale Price.
										</p>
									</div>

									<div className="mb-4">
										<h4 className="font-medium mb-2">6. Default</h4>
										<p className="text-muted-foreground">
											In the event of default by the Customer, the Bank shall be entitled to
											accelerate all remaining payments and charge interest at the prevailing
											market rate on the outstanding amount.
										</p>
									</div>
								</motion.div>
							)}

							{activeTab === "structure-analysis" && (
								<motion.div
									key="structure"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<div className="p-8 text-center text-muted-foreground">
										Structure analysis content would appear here
									</div>
								</motion.div>
							)}
						</AnimatePresence>

						{/* Scrollbar indicator */}
						<div className="absolute right-0 top-0 bottom-0 w-2">
							<div className="absolute top-[30%] w-2 h-24 bg-amber-200 dark:bg-amber-300/30 rounded-full"></div>
						</div>
					</div>
				</motion.div>

				{/* Right Column */}
				<div className="lg:col-span-5 space-y-4 sm:space-y-6">
					{/* Compliance Score */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
						className="bg-card rounded-xl border p-4 sm:p-6"
					>
						<h2 className="text-xl font-bold text-foreground mb-1">Shariah Compliance Score</h2>
						<p className="text-muted-foreground text-sm mb-6">
							AI-generated assessment of contract compliance
						</p>

						<div className="mb-6">
							<div className="flex justify-between mb-2">
								<span className="font-medium">Overall Score</span>
								<span className="font-medium">75%</span>
							</div>
							<div className="h-2 w-full bg-muted rounded-full overflow-hidden">
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "75%" }}
									transition={{ duration: 1, delay: 0.3 }}
									className="h-full bg-amber-400 rounded-full"
								/>
							</div>
						</div>

						<div className="space-y-4">
							<ComplianceItem label="Structure Validity" status="compliant" />
							<ComplianceItem label="Profit Calculation" status="needs-review" />
							<ComplianceItem label="Late Payment Terms" status="non-compliant" />
							<ComplianceItem label="Ownership Transfer" status="compliant" />
							<ComplianceItem label="Default Clauses" status="needs-review" />
						</div>
					</motion.div>

					{/* AI Feedback */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
						className="bg-card rounded-xl border p-4 sm:p-6"
					>
						<h2 className="text-xl font-bold text-foreground mb-1">AI Feedback</h2>
						<p className="text-muted-foreground text-sm mb-6">Auto-flagged clauses and suggestions</p>

						<div className="p-6 text-center text-muted-foreground italic">
							Feedback will appear here based on AI analysis
						</div>
					</motion.div>

					{/* Comment */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
						className="bg-card rounded-xl border p-4 sm:p-6"
					>
						<h2 className="text-xl font-bold text-foreground mb-6">Comment</h2>

						<div className="relative">
							<textarea
								className="w-full border border-border rounded-lg p-4 min-h-[100px] pr-12 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent bg-background"
								placeholder="Add comment or recommendations"
							/>
							<button className="absolute right-4 top-4 text-muted-foreground hover:text-amber-500">
								<Pen size={20} />
							</button>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 mt-6">
							<button className="flex-1 bg-amber-200 hover:bg-amber-300 dark:bg-amber-300/30 dark:hover:bg-amber-300/50 py-3 rounded-lg font-medium transition-colors">
								Approve and sign
							</button>
							<button className="flex-1 border border-border hover:bg-muted py-3 rounded-lg font-medium transition-colors">
								Request changes
							</button>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
