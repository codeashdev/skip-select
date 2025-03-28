import { motion } from "framer-motion";

export const NeomorphicFeature = ({ feature, index }: NeomorphicFeatureProps) => {
    return (
        <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center text-tertiary"
        >
            <svg
                className="w-4 h-4 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                />
            </svg>
            {feature}
        </motion.li>
    );
}; 