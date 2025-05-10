import { CustomAxios } from "@/utils/customAxios";

const BASE_URL = "sukuk";

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
