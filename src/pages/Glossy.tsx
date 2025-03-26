import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import { GlossyCard } from "../components/GlossyCard/GlossyCard";
import { QueryWrapper } from "../components/common/QueryWrapper";
import { fetchSkips } from "../services/skipService";

export const Glossy = () => {
    const query = useQuery({
        queryKey: ["skips", "NR32", "Lowestoft"],
        queryFn: () => fetchSkips("NR32", "Lowestoft")
    });

    return (
        <QueryWrapper query={query}>
            {(skips) => (
                <main
                    className="container mx-auto px-4 py-8"
                    role="main"
                    aria-label="Glossy Skip Cards"
                >
                    <h1 className="sr-only">Skip Cards - Glossy View</h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        role="list"
                        aria-label="List of available skips"
                    >
                        {skips.map((skip) => (
                            <div key={skip.id} role="listitem">
                                <GlossyCard skip={skip} />
                            </div>
                        ))}
                    </motion.div>
                </main>
            )}
        </QueryWrapper>
    );
}; 