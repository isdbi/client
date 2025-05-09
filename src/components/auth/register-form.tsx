"use client";

import { SignUp } from "@clerk/nextjs";

export function RegisterForm() {
	return (
		<div>
			<SignUp />
		</div>
	);
}
