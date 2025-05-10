import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface StatusIndicatorProps {
	type: "success" | "warning" | "error";
}

export function StatusIndicator({ type }: StatusIndicatorProps) {
	const colors = {
		success: "text-green-500 bg-green-50 dark:bg-green-900/20",
		warning: "text-amber-400 bg-amber-50 dark:bg-amber-900/20",
		error: "text-red-500 bg-red-50 dark:bg-red-900/20",
	};

	const icons = {
		success: <CheckCircle size={16} />,
		warning: <AlertTriangle size={16} />,
		error: <XCircle size={16} />,
	};

	return <div className={`w-8 h-8 rounded-full ${colors[type]} flex items-center justify-center`}>{icons[type]}</div>;
}
