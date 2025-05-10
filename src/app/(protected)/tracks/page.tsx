import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MagicCard } from "@/components/magicui/magic-card";
import { Home } from "lucide-react";

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
							<h1 className="text-2xl font-bold text-amber-400 dark:text-amber-300">
								Logo
							</h1>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<ThemeToggle />
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="container mx-auto px-4 py-16 text-center">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
					<span className="text-foreground">Build </span>
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-300 dark:to-amber-500">
						Shariah-compliant
					</span>
					<br />
					<span className="text-foreground">financial products</span>
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
					Create Islamic financial products in minutes, not months. Our
					AI-powered platform guides you through every step of the process.
				</p>
			</section>

			{/* Products Diagram Section */}
			<section id="products" className="container mx-auto px-4 pb-16">
				<h2 className="text-3xl font-bold text-center mb-12 text-foreground">
					Our Financial Products
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<MagicCard
							key={product.id}
							className="rounded-xl shadow-lg p-6 border border-amber-200/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-[101%]"
							gradientColor="rgba(251, 191, 36, 0.2)"
						>
							<div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
								<Home className="w-6 h-6 text-amber-500" />
							</div>
							<h3 className="text-xl font-bold mb-2 text-foreground">
								{product.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
								{product.description}
							</p>
							<Link
								href={product.link}
								className="block bg-amber-200 hover:bg-amber-300 dark:bg-amber-500/30 dark:hover:bg-amber-500/50 text-center text-gray-800 dark:text-amber-100 px-4 py-3 rounded-full font-medium transition-all duration-300 transform"
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
