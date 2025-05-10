import { CustomAxios } from "@/utils/customAxios";

const BASE_URL = "auth";

export async function apiRegisterHandler(userData: any) {
	try {
		const response = await CustomAxios(`${BASE_URL}/register`, "POST", userData);
		console.log("apiRegisterHandler: Response received", response.data);
		if (response.status >= 200 && response.status < 300) {
			return response.data;
		}
		return null;
	} catch (error: any) {
		throw new Error(error.message ?? "Something went wrong");
	}
}

export async function apiLoginHandler(email: string, password: string) {
	try {
		const response = await CustomAxios(`${BASE_URL}/login`, "POST", {
			email,
			password,
		});
		if (response.status >= 200 && response.status < 300) {
			return response.data;
		}
		return null;
	} catch (error: any) {
		throw new Error(error.message ?? "Something went wrong");
	}
}

export async function apiLogoutHandler() {
	try {
		return { success: true };
	} catch (error: any) {
		throw new Error(error.message ?? "Something went wrong");
	}
}

export async function apiForgotPasswordHandler(email: string) {
	try {
		const response = await CustomAxios(`${BASE_URL}/forgot-password`, "POST", {
			email,
		});
		if (response.status >= 200 && response.status < 300) {
			return response.data;
		}
		return null;
	} catch (error: any) {
		throw new Error(error.message ?? "Something went wrong");
	}
}

export async function apiResetPasswordHandler(token: string, newPassword: string) {
	try {
		const response = await CustomAxios(`${BASE_URL}/reset-password`, "POST", {
			token,
			newPassword,
		});
		if (response.status >= 200 && response.status < 300) {
			return response.data;
		}
		return null;
	} catch (error: any) {
		throw new Error(error.message ?? "Something went wrong");
	}
}

export async function apiVerifyOtpHandler(email: string, otp: string) {
	try {
		const response = await CustomAxios(`${BASE_URL}/verify-otp`, "POST", {
			email,
			otp,
		});
		if (response.status >= 200 && response.status < 300) {
			return response.data;
		}
		return null;
	} catch (error: any) {
		throw new Error(error.message ?? "Something went wrong");
	}
}
