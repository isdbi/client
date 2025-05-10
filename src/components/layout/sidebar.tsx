import Link from "next/link";
import { LayoutGrid, FileText, Package, Users, Settings, User, Ruler } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

interface SidebarProps {
	pathname: string;
	pathnameRoot: string;
	productType: string;
}

export function Sidebar({ pathname, pathnameRoot, productType }: SidebarProps) {
	return (
		<div className="py-4 pl-4 pr-8 hidden md:block">
			<div className="flex flex-col items-center bg-card border rounded-full p-2">
				<SidebarLogo />
				<div className="flex flex-col items-center gap-6 mt-8 flex-1">
					<SidebarLink
						href={`/${pathnameRoot}`}
						icon={<LayoutGrid size={24} />}
						active={pathname === `/${productType}`}
					/>
					<SidebarLink
						href={`/${pathnameRoot}/compliance-review`}
						icon={<Ruler size={24} />}
						active={pathname.includes("/compliance-review")}
					/>
					<SidebarLink
						href={`/${pathnameRoot}/contracts`}
						icon={<FileText size={24} />}
						active={pathname.includes("/contracts")}
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
					<SidebarLink href="/profile" icon={<User size={24} />} active={pathname === "/profile"} />
				</div>
			</div>
		</div>
	);
}

function SidebarLogo() {
	return (
		<div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 3L18 9L12 15L6 9L12 3Z" fill="#F59E0B" />
				<path d="M9 9L12 6L15 9L12 12L9 9Z" fill="white" />
			</svg>
		</div>
	);
}

function SidebarLink({ href, icon, active = false }: { href: string; icon: any; active: boolean }) {
	return (
		<Link
			href={href}
			className={`relative w-12 h-12 flex items-center justify-center rounded-md ${
				active ? "text-amber-500" : "text-muted-foreground hover:text-foreground hover:bg-muted"
			}`}
		>
			{icon}
			{active && (
				<div className="absolute -right-[10px] top-1/2 -translate-y-1/2 w-1.5 h-8 bg-amber-400 rounded-l-md"></div>
			)}
		</Link>
	);
}
