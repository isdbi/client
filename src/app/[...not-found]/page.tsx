"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	const { resolvedTheme } = useTheme();
	const isDark = resolvedTheme === "dark";

	return (
		<div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
			{/* Content */}
			<motion.div
				className="z-10 text-center px-4"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="mb-6 relative"
				>
					<div className="text-9xl font-bold opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						404
					</div>
					<motion.div
						className="text-8xl font-bold relative z-10"
						animate={{
							color: isDark
								? ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--primary))"]
								: ["hsl(var(--primary))", "hsl(var(--accent-foreground))", "hsl(var(--primary))"],
						}}
						transition={{
							duration: 8,
							repeat: Number.POSITIVE_INFINITY,
						}}
					>
						404
					</motion.div>
				</motion.div>

				<motion.h1
					className="text-3xl md:text-4xl font-bold mb-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					Page Not Found
				</motion.h1>

				<motion.p
					className="text-muted-foreground mb-8 max-w-md mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7, duration: 0.5 }}
				>
					The page you are looking for does not exist or has been moved to another location.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 0.5 }}
				>
					<Button asChild size="lg" className="gap-2">
						<Link href="/">
							<Home className="w-4 h-4" />
							<span>Back to Home</span>
						</Link>
					</Button>
				</motion.div>
			</motion.div>
		</div>
	);
}
