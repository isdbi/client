import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MagicCard } from "@/components/magicui/magic-card";
import { Box, Home } from "lucide-react";

const products = [
	{
		id: "murabaha",
		title: "Murabaha",
		description: "Cost-plus financing structure for asset acquisition",
		link: "/murabaha",
	},
	{
		id: "ijarah",
		title: "Ijarah",
		description: "Lease-based financing for assets and equipment",
		link: "/ijarah",
	},
	{
		id: "musharakah",
		title: "Musharakah",
		description: "Partnership structure with profit and loss sharing",
		link: "/musharakah",
	},
	{
		id: "sukuk",
		title: "Sukuk",
		description: "Islamic bonds and investment certificates",
		link: "/sukuk",
	},
];

export default function HomePage() {
	return (
		<div className="bg-background text-foreground">
			{/* Navigation */}
			<header className="container mx-auto px-4 py-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<div className="mr-12">
							<h1 className="text-2xl font-bold text-amber-400 dark:text-amber-300">Logo</h1>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<ThemeToggle />
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="container mx-auto px-4 py-12 md:py-32 text-center">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
					<span className="text-foreground">Build </span>
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-300 dark:to-amber-500">
						Shariah-compliant
					</span>
					<br />
					<span className="text-foreground">financial products</span>
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
					Create Islamic financial products in minutes, not months. Our AI-powered platform guides you through
					every step of the process.
				</p>
			</section>

			{/* Products Diagram Section */}
			<section id="products" className="container mx-auto px-4 pb-16">
				<h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Financial Products</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<MagicCard
							key={product.id}
							className="rounded-xl shadow-sm p-6 border border-amber-200/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[101%] dark:shadow-amber-300/20"
							gradientColor="rgba(251, 191, 36, 0.2)"
						>
							<h3 className="text-xl font-bold mb-2 text-foreground flex items-center justify-between gap-2">
								{product.title}
								<Box className="size-5 text-amber-500" />
							</h3>
							<p className="text-gray-600 dark:text-gray-300 text-sm mb-12">{product.description}</p>
							<Link
								href={product.link}
								className="block bg-amber-200 hover:bg-amber-300 dark:bg-amber-500/30 dark:hover:bg-amber-500/50 text-center text-gray-800 dark:text-amber-100 px-2 py-2 rounded-full font-medium transition-all duration-300 transform mt-auto"
							>
								Get Started
							</Link>
						</MagicCard>
					))}
				</div>
			</section>
		</div>
	);
}
