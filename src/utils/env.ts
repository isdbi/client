import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../.env") });

interface EnvConfig {
	LOCAL_API_URL: string;
	HOSTED_API_URL: string;
	PORT: number;
	ENV: "development" | "production" | "test";
}

const getEnv: EnvConfig = {
	LOCAL_API_URL: process.env.LOCAL_API_URL ?? "",
	HOSTED_API_URL: process.env.HOSTED_API_URL ?? "",
	PORT: parseInt(process.env.PORT ?? "3000", 10),
	ENV: (process.env.NODE_ENV as "development" | "production" | "test") ?? "development",
};

const requiredVars: (keyof EnvConfig)[] = ["LOCAL_API_URL", "HOSTED_API_URL", "PORT", "ENV"];

for (const varName of requiredVars) {
	if (!getEnv[varName]) {
		throw new Error(`⛔ Missing required environment variable: ${varName}`);
	}
}

export default getEnv;

// ✅
