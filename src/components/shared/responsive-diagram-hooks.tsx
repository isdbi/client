"use client";

import { useState, useEffect } from "react";

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: typeof window !== "undefined" ? window.innerWidth : 0,
		height: typeof window !== "undefined" ? window.innerHeight : 0,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleResize);
			handleResize();

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return windowSize;
}

export function useBreakpoint() {
	const { width } = useWindowSize();

	return {
		isMobile: width < 768,
		isTablet: width >= 768 && width < 1024,
		isDesktop: width >= 1024,
	};
}
