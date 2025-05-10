import { ClerkProvider } from "@clerk/nextjs";

export default function ClerkAuthProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>{children}</ClerkProvider>;
}
