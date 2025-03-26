import { motion } from "motion/react";
import { UseQueryResult } from "@tanstack/react-query";
import { LoadingSpinner } from "./LoadingSpinner";

interface QueryWrapperProps {
	query: UseQueryResult<Skip[], unknown>;
	children: (data: Skip[]) => React.ReactNode;
}

export const QueryWrapper = ({ query, children }: QueryWrapperProps) => {
	const { data, isLoading, isError, error } = query;

	if (isLoading) {
		return (
			<div
				className="flex items-center justify-center min-h-screen"
				role="status"
				aria-live="polite"
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="w-24 h-24 text-primary"
				>
					<LoadingSpinner />
				</motion.div>
			</div>
		);
	}

	if (isError) {
		return (
			<div
				className="flex items-center justify-center min-h-screen"
				role="alert"
				aria-live="assertive"
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-red-500 text-lg"
				>
					Error: {(error as Error)?.message || "Failed to fetch skips"}
				</motion.div>
			</div>
		);
	}

	if (!data) {
		return (
			<div
				className="flex items-center justify-center min-h-screen"
				role="status"
				aria-live="polite"
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-secondary text-lg"
				>
					No skips available
				</motion.div>
			</div>
		);
	}

	return <>{children(data)}</>;
};
