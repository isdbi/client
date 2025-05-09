"use client";

import { SignIn } from "@clerk/nextjs";

export function LoginForm() {
	return (
		<div>
			<SignIn />
		</div>
	);
}
