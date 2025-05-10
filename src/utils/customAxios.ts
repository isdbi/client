import axios from "axios";
import { cookies } from "next/headers";
import getEnv from "./env";

export const BASE_URL = getEnv.ENV === "development" ? getEnv.LOCAL_API_URL : getEnv.HOSTED_API_URL;

const cookieStore = await cookies();

export const CustomAxios = async (path: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: any) => {
	const token = cookieStore.get("auth_token");

	console.log("path");
	console.log(`${BASE_URL}${path}`);

	const res = await axios({
		url: `${BASE_URL}${path}`,
		method,
		data,
		headers: {
			Authorization: `Bearer ${token}`,
		},
		withCredentials: true,
	});
	return res;
};

export const checkNetworkServer = (err: any) => {
	if (axios.isAxiosError(err)) {
		if (err.code === "ERR_NETWORK" && err.message === "Network Error") {
			console.log("no network connection or no server response received");
			return "ERR_NETWORK";
		}
	} else {
		return null;
	}
};
