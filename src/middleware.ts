import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
	"/protected(.*)",
	"/settings(.*)",
]);

// const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
	const { userId, redirectToSignIn } = await auth();

	if (isProtectedRoute(req)) await auth.protect();

	if (userId) {
		if (
			req.nextUrl.pathname === "/sign-in" ||
			req.nextUrl.pathname === "/sign-up"
		) {
			return Response.redirect(new URL("/tracks", req.url));
		}
	}
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
