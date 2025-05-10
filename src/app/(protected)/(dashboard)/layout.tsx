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
	User,
	ChevronLeft,
	AlertTriangle,
	CheckCircle,
	XCircle,
} from "lucide-react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const [productType, setProductType] = useState<string>("murabaha");
	const [isMobile, setIsMobile] = useState(false);
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
		<div className="flex h-screen bg-muted/30 dark:bg-muted/10">
			{/* Sidebar - Hidden on mobile */}
			<div className="hidden md:flex w-20 flex-col items-center bg-card border-r border-border py-4">
				<SidebarLogo />
				<div className="flex flex-col items-center gap-6 mt-8 flex-1">
					<SidebarLink
						href={`/${pathnameRoot}`}
						icon={<LayoutGrid size={24} />}
						active={pathname === `/${productType}`}
					/>
					<SidebarLink
						href={`/${pathnameRoot}/contracts`}
						icon={<FileText size={24} />}
						active={pathname.includes("/contracts")}
					/>
					<SidebarLink
						href={`/${pathnameRoot}/products`}
						icon={<Package size={24} />}
						active={pathname.includes("/products")}
					/>
					<SidebarLink
						href={`/${pathnameRoot}/users`}
						icon={<Users size={24} />}
						active={pathname.includes("/users")}
					/>
					<SidebarLink
						href={`/${pathnameRoot}/settings`}
						icon={<Settings size={24} />}
						active={pathname.includes("/settings")}
					/>
				</div>
				<div className="mt-auto mb-4">
					<ThemeToggle />
				</div>
				<div className="mt-2">
					<SidebarLink
						href="/profile"
						icon={<User size={24} />}
						active={pathname === "/profile"}
					/>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Header */}
				<header className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-border bg-card">
					<div className="flex items-center">
						<Link href="/" className="md:hidden mr-4">
							<ChevronLeft size={20} />
						</Link>
						<h1 className="text-amber-400 text-xl font-semibold">
							{getProductTitle(productType)}
						</h1>
						{pathname.includes("compliance-review") && (
							<span className="ml-3 px-3 py-0.5 text-xs font-medium bg-red-100 text-red-500 rounded-full dark:bg-red-900/30">
								High
							</span>
						)}
					</div>
					<div className="flex items-center gap-3">
						<div className="hidden sm:flex">
							<StatusIndicator type="success" />
							<StatusIndicator type="warning" />
							<StatusIndicator type="error" />
							<div className="w-px h-6 bg-border mx-2"></div>
						</div>
						<div className="hidden md:block">
							<ThemeToggle />
						</div>
						<div className="w-8 h-8 rounded-full bg-amber-400"></div>
					</div>
				</header>

				{/* Content */}
				<main className="flex-1 overflow-auto">{children}</main>

				{/* Mobile Dock */}
				{isMobile && (
					<motion.div
						className="fixed bottom-4 left-0 right-0 flex justify-center z-50"
						initial={{ y: 100 }}
						animate={{ y: showMobileDock ? 0 : 100 }}
						transition={{ duration: 0.3 }}
					>
						<Dock className="mx-auto">
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

function SidebarLogo() {
	return (
		<div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-md flex items-center justify-center">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M12 3L18 9L12 15L6 9L12 3Z" fill="#F59E0B" />
				<path d="M9 9L12 6L15 9L12 12L9 9Z" fill="white" />
			</svg>
		</div>
	);
}

function SidebarLink({
	href,
	icon,
	active = false,
}: {
	href: string;
	icon: any;
	active: boolean;
}) {
	return (
		<Link
			href={href}
			className={`relative w-12 h-12 flex items-center justify-center rounded-md ${
				active
					? "text-amber-500"
					: "text-muted-foreground hover:text-foreground hover:bg-muted"
			}`}
		>
			{icon}
			{active && (
				<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-amber-400 rounded-l-md"></div>
			)}
		</Link>
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

	return (
		<div
			className={`w-8 h-8 rounded-full ${colors[type]} flex items-center justify-center`}
		>
			{icons[type]}
		</div>
	);
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
