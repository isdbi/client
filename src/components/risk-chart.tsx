"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function RiskChart() {
	const data = [
		{
			name: "Q1",
			investment: -5000000,
			revenue: 0,
			cashFlow: -5000000,
		},
		{
			name: "Q2",
			investment: -5000000,
			revenue: 0,
			cashFlow: -5000000,
		},
		{
			name: "Q3",
			investment: -3000000,
			revenue: 0,
			cashFlow: -3000000,
		},
		{
			name: "Q4",
			investment: -2000000,
			revenue: 0,
			cashFlow: -2000000,
		},
		{
			name: "Q5",
			investment: 0,
			revenue: 1500000,
			cashFlow: 1500000,
		},
		{
			name: "Q6",
			investment: 0,
			revenue: 2500000,
			cashFlow: 2500000,
		},
		{
			name: "Q7",
			investment: 0,
			revenue: 3000000,
			cashFlow: 3000000,
		},
		{
			name: "Q8",
			investment: 0,
			revenue: 3500000,
			cashFlow: 3500000,
		},
		{
			name: "Q9",
			investment: 0,
			revenue: 4000000,
			cashFlow: 4000000,
		},
		{
			name: "Q10",
			investment: 0,
			revenue: 4500000,
			cashFlow: 4500000,
		},
		{
			name: "Q11",
			investment: 0,
			revenue: 5000000,
			cashFlow: 5000000,
		},
		{
			name: "Q12",
			investment: 0,
			revenue: 5500000,
			cashFlow: 5500000,
		},
	];

	return (
		<div className="h-[300px] w-full">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="investment" stroke="#ef4444" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="revenue" stroke="#22c55e" />
					<Line type="monotone" dataKey="cashFlow" stroke="#3b82f6" strokeWidth={2} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
