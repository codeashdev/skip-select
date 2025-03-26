import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import { HorizontalCard } from "../components/HorizontalCard/HorizontalCard";
import { QueryWrapper } from "../components/common/QueryWrapper";
import { fetchSkips } from "../services/skipService";

export const Horizontal = () => {
	const query = useQuery({
		queryKey: ["skips", "NR32", "Lowestoft"],
		queryFn: () => fetchSkips("NR32", "Lowestoft"),
	});

	return (
		<QueryWrapper query={query}>
			{(skips) => (
				<main
					className="container mx-auto px-4 py-8"
					role="main"
					aria-label="Horizontal Skip Cards"
				>
					<h1 className="sr-only">Skip Cards - Horizontal View</h1>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="grid gap-6"
						role="list"
						aria-label="List of available skips"
					>
						{skips.map((skip) => (
							<div key={skip.id} role="listitem">
								<HorizontalCard skip={skip} />
							</div>
						))}
					</motion.div>
				</main>
			)}
		</QueryWrapper>
	);
};
