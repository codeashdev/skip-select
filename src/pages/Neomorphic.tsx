import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NeomorphicCard } from "../components/NeomorphicCard/NeomorphicCard";
import { NeomorphicDrawer } from "../components/NeomorphicCard/NeomorphicDrawer";
import { QueryWrapper } from "../components/common/QueryWrapper";
import { fetchSkips } from "../services/skipService";

export const Neomorphic = () => {
    const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
    const query = useQuery({
        queryKey: ["skips", "NR32", "Lowestoft"],
        queryFn: () => fetchSkips("NR32", "Lowestoft"),
    });

    return (
        <QueryWrapper query={query}>
            {(skips) => (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="container mx-auto px-4 py-8"
                        role="main"
                        aria-label="Neomorphic Skip Cards"
                    >

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            role="list"
                            aria-label="List of available skips"
                        >
                            {skips.map((skip) => (
                                <div key={skip.id} role="listitem">
                                    <NeomorphicCard
                                        skip={skip}
                                        onClick={() => setSelectedSkip(skip)}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {selectedSkip && (
                        <NeomorphicDrawer
                            skip={selectedSkip}
                            onClose={() => setSelectedSkip(null)}
                        />
                    )}
                </>
            )}
        </QueryWrapper>
    );
}; 