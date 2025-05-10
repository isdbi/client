import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/react-query-provider";
import ClerkAuthProvider from "@/providers/clerk-auth-provider";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/layout/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Dirham",
	description: "Dirham is a Shariah-compliant banking platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en" suppressHydrationWarning>
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<ClerkAuthProvider>
							<ReactQueryProvider>
								{children}
								<Analytics />
							</ReactQueryProvider>
						</ClerkAuthProvider>
					</ThemeProvider>
				</body>
			</html>
		</ViewTransitions>
	);
}
