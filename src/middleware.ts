import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/murabaha(.*)", "/ijarah(.*)", "/musharakah(.*)", "/sukuk(.*)"]);

// const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
	const { userId } = await auth();

	if (isProtectedRoute(req)) await auth.protect();

	if (userId) {
		if (req.nextUrl.pathname === "/sign-in" || req.nextUrl.pathname === "/sign-up") {
			return Response.redirect(new URL("/", req.url));
		}
	}
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
