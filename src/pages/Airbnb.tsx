import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { AirbnbCard } from "../components/AirbnbCard/AirbnbCard";
import { QueryWrapper } from "../components/common/QueryWrapper";
import { fetchSkips } from "../services/skipService";

export const AirbnbPage = () => {
    const query = useQuery({
        queryKey: ["skips", "NR32", "Lowestoft"],
        queryFn: () => fetchSkips("NR32", "Lowestoft")
    });

    return (
        <QueryWrapper query={query}>
            {(skips) => (
                <div className="container mx-auto px-4 py-8">

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {skips.map(skip => (
                            <AirbnbCard
                                key={skip.id}
                                skip={skip}
                            />
                        ))}
                    </motion.div>
                </div>
            )}
        </QueryWrapper>
    );
}; 