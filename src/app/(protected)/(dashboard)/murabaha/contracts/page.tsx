"use client";

"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, AnimatedTabsContent } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";
import { RiskChart } from "@/components/risk-chart";
import { Separator } from "@/components/ui/separator";

export default function MurabahaContactPage() {
	return (
		<div className="flex flex-col gap-6 p-4 sm:p-6">
			<div className="flex items-center justify-end">
				<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Musharakah Joint Venture Contract</Badge>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<div className="md:col-span-2">
					<Card>
						<CardHeader>
							<CardTitle>Financial Model Simulator</CardTitle>
							<CardDescription>Assess financial feasibility and exposure</CardDescription>
						</CardHeader>
						<CardContent>
							<Tabs defaultValue="model">
								<TabsList className="grid w-full grid-cols-3">
									<TabsTrigger value="model">Financial Model</TabsTrigger>
									<TabsTrigger value="stress">Stress Tests</TabsTrigger>
									<TabsTrigger value="scenarios">Scenarios</TabsTrigger>
								</TabsList>

								<AnimatedTabsContent value="model" className="space-y-4 mt-4">
									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-2">
											<h4 className="text-sm font-medium">Project Details</h4>
											<div className="grid grid-cols-2 gap-2 text-sm">
												<div className="text-muted-foreground">Project Type:</div>
												<div>Real Estate Development</div>
												<div className="text-muted-foreground">Total Investment:</div>
												<div>QAR 25,000,000</div>
												<div className="text-muted-foreground">Bank Contribution:</div>
												<div>QAR 15,000,000 (60%)</div>
												<div className="text-muted-foreground">Client Contribution:</div>
												<div>QAR 10,000,000 (40%)</div>
												<div className="text-muted-foreground">Project Duration:</div>
												<div>36 months</div>
												<div className="text-muted-foreground">Expected Profit:</div>
												<div>QAR 7,500,000</div>
												<div className="text-muted-foreground">Profit Sharing Ratio:</div>
												<div>Bank: 50%, Client: 50%</div>
											</div>
										</div>

										<div className="space-y-2">
											<h4 className="text-sm font-medium">Key Financial Indicators</h4>
											<div className="space-y-3">
												<div>
													<div className="flex justify-between items-center">
														<span className="text-xs">Expected ROI</span>
														<span className="text-xs font-medium">30%</span>
													</div>
													<div className="w-full bg-secondary h-2 rounded-full mt-1">
														<div className="bg-green-500 h-2 rounded-full w-[75%]"></div>
													</div>
												</div>

												<div>
													<div className="flex justify-between items-center">
														<span className="text-xs">Debt Service Coverage Ratio</span>
														<span className="text-xs font-medium">1.8</span>
													</div>
													<div className="w-full bg-secondary h-2 rounded-full mt-1">
														<div className="bg-green-500 h-2 rounded-full w-[80%]"></div>
													</div>
												</div>

												<div>
													<div className="flex justify-between items-center">
														<span className="text-xs">Project Completion Risk</span>
														<span className="text-xs font-medium">Medium</span>
													</div>
													<div className="w-full bg-secondary h-2 rounded-full mt-1">
														<div className="bg-amber-500 h-2 rounded-full w-[50%]"></div>
													</div>
												</div>

												<div>
													<div className="flex justify-between items-center">
														<span className="text-xs">Market Risk</span>
														<span className="text-xs font-medium">Low</span>
													</div>
													<div className="w-full bg-secondary h-2 rounded-full mt-1">
														<div className="bg-green-500 h-2 rounded-full w-[25%]"></div>
													</div>
												</div>

												<div>
													<div className="flex justify-between items-center">
														<span className="text-xs">Partner Default Risk</span>
														<span className="text-xs font-medium">High</span>
													</div>
													<div className="w-full bg-secondary h-2 rounded-full mt-1">
														<div className="bg-red-500 h-2 rounded-full w-[75%]"></div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<Separator className="my-4" />

									<div>
										<h4 className="text-sm font-medium mb-3">Projected Cash Flow</h4>
										<RiskChart />
									</div>
								</AnimatedTabsContent>

								<AnimatedTabsContent value="stress" className="space-y-4 mt-4">
									<div className="space-y-4">
										<div className="border rounded-md p-4">
											<div className="flex items-center justify-between">
												<h4 className="text-sm font-medium flex items-center">
													<TrendingDown className="mr-2 h-4 w-4 text-red-500" />
													Partner Default Scenario
												</h4>
												<Badge variant="outline" className="bg-red-50 text-red-700">
													High Risk
												</Badge>
											</div>
											<p className="text-xs text-muted-foreground mt-2">
												If the partner defaults after 18 months, the {"bank's"} exposure would
												be QAR 9,000,000 with potential recovery of QAR 6,000,000 from project
												assets.
											</p>
											<div className="mt-3">
												<div className="flex justify-between items-center text-xs">
													<span>Net Loss Exposure:</span>
													<span className="font-medium">QAR 3,000,000</span>
												</div>
												<div className="w-full bg-secondary h-2 rounded-full mt-1">
													<div className="bg-red-500 h-2 rounded-full w-[60%]"></div>
												</div>
											</div>
										</div>

										<div className="border rounded-md p-4">
											<div className="flex items-center justify-between">
												<h4 className="text-sm font-medium flex items-center">
													<TrendingDown className="mr-2 h-4 w-4 text-amber-500" />
													Market Downturn Scenario
												</h4>
												<Badge variant="outline" className="bg-amber-50 text-amber-700">
													Medium Risk
												</Badge>
											</div>
											<p className="text-xs text-muted-foreground mt-2">
												A 20% market downturn would reduce the project value to QAR 20,000,000,
												resulting in a profit reduction of 40%.
											</p>
											<div className="mt-3">
												<div className="flex justify-between items-center text-xs">
													<span>Revised ROI:</span>
													<span className="font-medium">18%</span>
												</div>
												<div className="w-full bg-secondary h-2 rounded-full mt-1">
													<div className="bg-amber-500 h-2 rounded-full w-[45%]"></div>
												</div>
											</div>
										</div>

										<div className="border rounded-md p-4">
											<div className="flex items-center justify-between">
												<h4 className="text-sm font-medium flex items-center">
													<TrendingDown className="mr-2 h-4 w-4 text-amber-500" />
													Construction Delay Scenario
												</h4>
												<Badge variant="outline" className="bg-amber-50 text-amber-700">
													Medium Risk
												</Badge>
											</div>
											<p className="text-xs text-muted-foreground mt-2">
												A 6-month delay would increase costs by QAR 1,500,000 and reduce profit
												by 20%.
											</p>
											<div className="mt-3">
												<div className="flex justify-between items-center text-xs">
													<span>Revised Profit:</span>
													<span className="font-medium">QAR 6,000,000</span>
												</div>
												<div className="w-full bg-secondary h-2 rounded-full mt-1">
													<div className="bg-amber-500 h-2 rounded-full w-[50%]"></div>
												</div>
											</div>
										</div>
									</div>
								</AnimatedTabsContent>

								<AnimatedTabsContent value="scenarios" className="space-y-4 mt-4">
									<div className="grid grid-cols-3 gap-4">
										<div className="border rounded-md p-3">
											<h4 className="text-sm font-medium flex items-center">
												<TrendingUp className="mr-2 h-4 w-4 text-green-500" />
												Best Case
											</h4>
											<div className="mt-2 space-y-2 text-xs">
												<div className="flex justify-between">
													<span className="text-muted-foreground">Completion:</span>
													<span>On time</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">Market:</span>
													<span>10% growth</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">Final Profit:</span>
													<span className="font-medium">QAR 9,000,000</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">Bank Share:</span>
													<span>QAR 4,500,000</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">ROI:</span>
													<span>36%</span>
												</div>
											</div>
										</div>

										<div className="border rounded-md p-3">
											<h4 className="text-sm font-medium">Base Case</h4>
											<div className="mt-2 space-y-2 text-xs">
												<div className="flex justify-between">
													<span className="text-muted-foreground">Completion:</span>
													<span>On time</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">Market:</span>
													<span>Stable</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">Final Profit:</span>
													<span className="font-medium">QAR 7,500,000</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">Bank Share:</span>
													<span>QAR 3,750,000</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">ROI:</span>
													<span>30%</span>
												</div>
											</div>
										</div>

										<div className="border rounded-md p-3">
											<h4 className="text-sm font-medium flex items-center">
												<TrendingDown className="mr-2 h-4 w-4 text-red-500" />
												Worst Case
											</h4>
											<div className="mt-2 space-y-2 text-xs">
												<div className="flex justify-between">
													<span className="text-muted-foreground">Completion:</span>
													<span>6 month delay</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">Market:</span>
													<span>20% downturn</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">Final Profit:</span>
													<span className="font-medium">QAR 3,000,000</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">Bank Share:</span>
													<span>QAR 1,500,000</span>
												</div>
												<div className="flex justify-between">
													<span className="text-muted-foreground">ROI:</span>
													<span>12%</span>
												</div>
											</div>
										</div>
									</div>

									<div className="border rounded-md p-4 mt-4">
										<h4 className="text-sm font-medium mb-3">Probability Analysis</h4>
										<div className="space-y-3">
											<div>
												<div className="flex justify-between items-center">
													<span className="text-xs">Best Case Scenario</span>
													<span className="text-xs font-medium">25%</span>
												</div>
												<div className="w-full bg-secondary h-2 rounded-full mt-1">
													<div className="bg-green-500 h-2 rounded-full w-[25%]"></div>
												</div>
											</div>

											<div>
												<div className="flex justify-between items-center">
													<span className="text-xs">Base Case Scenario</span>
													<span className="text-xs font-medium">60%</span>
												</div>
												<div className="w-full bg-secondary h-2 rounded-full mt-1">
													<div className="bg-blue-500 h-2 rounded-full w-[60%]"></div>
												</div>
											</div>

											<div>
												<div className="flex justify-between items-center">
													<span className="text-xs">Worst Case Scenario</span>
													<span className="text-xs font-medium">15%</span>
												</div>
												<div className="w-full bg-secondary h-2 rounded-full mt-1">
													<div className="bg-red-500 h-2 rounded-full w-[15%]"></div>
												</div>
											</div>
										</div>
									</div>
								</AnimatedTabsContent>
							</Tabs>
						</CardContent>
					</Card>
				</div>

				<div className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Risk Summary</CardTitle>
							<CardDescription>AI-generated risk assessment</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-between">
								<span className="text-sm font-medium">Overall Risk Rating</span>
								<Badge variant="outline" className="bg-amber-50 text-amber-700">
									Medium Risk
								</Badge>
							</div>

							<Separator />

							<div className="space-y-3">
								<div className="flex items-start space-x-2">
									<XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
									<div>
										<h4 className="text-sm font-medium">Partner Default Risk</h4>
										<p className="text-xs text-muted-foreground">
											Client has limited experience in real estate development and financial
											capacity is concentrated in illiquid assets.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-2">
									<AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
									<div>
										<h4 className="text-sm font-medium">Project Completion Risk</h4>
										<p className="text-xs text-muted-foreground">
											Construction timeline is aggressive given the scale of the project.
											Recommend additional contingency planning.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-2">
									<CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
									<div>
										<h4 className="text-sm font-medium">Market Risk</h4>
										<p className="text-xs text-muted-foreground">
											Strong demand in the target market segment with limited new supply in the
											pipeline.
										</p>
									</div>
								</div>
							</div>

							<Separator />

							<div>
								<h4 className="text-sm font-medium mb-2">Risk Mitigation Recommendations</h4>
								<ul className="text-xs text-muted-foreground space-y-1 list-disc pl-5">
									<li>Require additional collateral to mitigate partner default risk</li>
									<li>Implement phased funding tied to construction milestones</li>
									<li>Include contingency buffer of 10% in the project budget</li>
									<li>Conduct quarterly market assessments to monitor demand</li>
								</ul>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Risk Assessment Notes</CardTitle>
							<CardDescription>Add your comments and recommendations</CardDescription>
						</CardHeader>
						<CardContent>
							<Textarea
								placeholder="Enter your risk assessment notes here..."
								className="min-h-[120px]"
							/>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline">Export to Excel</Button>
							<Button>Approve & Sign</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
}
