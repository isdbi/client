"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	LayoutGrid,
	FileText,
	Package,
	Users,
	Settings,
	ChevronLeft,
	AlertTriangle,
	CheckCircle,
	XCircle,
} from "lucide-react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const [productType, setProductType] = useState<string>("murabaha");
	const [isMobile, setIsMobile] = useState(true);
	const [showMobileDock, setShowMobileDock] = useState(false);
	const pathnameRoot = pathname.split("/")[1];

	// Extract product type from URL
	useEffect(() => {
		const segments = pathname.split("/");
		if (segments.length > 2) {
			const product = segments[2].split("/")[0];
			setProductType(product);
		}
	}, [pathname]);

	// Check if mobile
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);
		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	// Show mobile dock when scrolling up
	useEffect(() => {
		if (!isMobile) return;

		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const scrollingUp = scrollY < lastScrollY;

			setShowMobileDock(scrollingUp || scrollY < 10);
			lastScrollY = scrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isMobile]);

	return (
		<div className="flex h-screen bg-muted/40 dark:bg-muted/10">
			<Sidebar pathname={pathname} pathnameRoot={pathnameRoot} productType={productType} />

			{/* Main Content */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Header */}
				<header className="flex items-center justify-between pt-6 pb-2 border-b border-border">
					<div className="flex items-center">
						<Link href="/" className="md:hidden mx-4">
							<ChevronLeft size={20} />
						</Link>
						<h1 className="text-amber-400 text-xl font-semibold">{getProductTitle(productType)}</h1>
						{pathname.includes("compliance-review") && (
							<span className="ml-3 px-3 py-0.5 text-xs font-medium bg-red-100 text-red-500 rounded-full dark:bg-red-900/30">
								High
							</span>
						)}
					</div>
					<div className="flex items-center gap-3 pr-5">
						{/* <ThemeToggle /> */}
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div>
				</header>

				{/* Content */}
				<main className="flex-1 overflow-auto">{children}</main>

				{/* Mobile Dock */}
				{isMobile && (
					<motion.div
						className="fixed bottom-8 left-0 right-0 flex justify-center z-50"
						initial={{ y: 100 }}
						animate={{ y: showMobileDock ? 0 : 100 }}
						transition={{ duration: 0.3 }}
					>
						<Dock className="mx-auto bg-white/60">
							<Link href={`/${productType}`}>
								<DockIcon>
									<LayoutGrid size={24} />
								</DockIcon>
							</Link>
							<Link href={`/${productType}/contracts`}>
								<DockIcon>
									<FileText size={24} />
								</DockIcon>
							</Link>

							<Link href={`/${productType}/products`}>
								<DockIcon>
									<Package size={24} />
								</DockIcon>
							</Link>

							<Link href={`/${productType}/users`}>
								<DockIcon>
									<Users size={24} />
								</DockIcon>
							</Link>

							<Link href={`/${productType}/settings`}>
								<DockIcon>
									<Settings size={24} />
								</DockIcon>
							</Link>
						</Dock>
					</motion.div>
				)}
			</div>
		</div>
	);
}

function StatusIndicator({ type }: { type: "success" | "warning" | "error" }) {
	const colors = {
		success: "text-green-500 bg-green-50 dark:bg-green-900/20",
		warning: "text-amber-400 bg-amber-50 dark:bg-amber-900/20",
		error: "text-red-500 bg-red-50 dark:bg-red-900/20",
	};

	const icons = {
		success: <CheckCircle size={16} />,
		warning: <AlertTriangle size={16} />,
		error: <XCircle size={16} />,
	};

	return <div className={`w-8 h-8 rounded-full ${colors[type]} flex items-center justify-center`}>{icons[type]}</div>;
}

function getProductTitle(productType: string): string {
	switch (productType) {
		case "murabaha":
			return "Murabaha Dashboard";
		case "ijarah":
			return "Ijarah Dashboard";
		case "musharakah":
			return "Musharakah Dashboard";
		case "sukuk":
			return "Sukuk Dashboard";
		default:
			return "Dashboard";
	}
}
