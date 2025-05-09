import { ClerkProvider } from "@clerk/nextjs";

export default function ClerkAuthProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <ClerkProvider>{children}</ClerkProvider>;
}
