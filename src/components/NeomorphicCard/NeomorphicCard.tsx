import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { NeomorphicFeature } from "./NeomorphicFeature";
import { NeomorphicSpecification } from "./NeomorphicSpecification";

export const NeomorphicCard = ({ skip, onClick }: NeomorphicCardProps) => {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse movement animation setup
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    const springConfig = { damping: 20, stiffness: 300 };
    const rotateXSpring = useSpring(rotateX, springConfig);
    const rotateYSpring = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!skip.allows_heavy_waste) return;

        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    const handleClick = (_e: React.MouseEvent) => {
        if (!skip.allows_heavy_waste) return;
        document.body.style.overflow = 'hidden';
        onClick();
    };

    // Cleanup function to reset body overflow
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Calculate total price including VAT
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

    // Generate features based on skip properties
    const features = [
        `${skip.size} Yard Skip`,
        `${skip.hire_period_days} Days Hire Period`,
        skip.allowed_on_road ? "Allowed on Road" : "Not Allowed on Road",
        skip.allows_heavy_waste ? "Heavy Waste Allowed" : "No Heavy Waste",
        skip.area ? `Available in ${skip.area}` : "Available in All Areas"
    ];

    return (
        <motion.div
            ref={cardRef}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onHoverStart={() => setIsHovered(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                perspective: 1000,
            }}
            className={`
                relative overflow-hidden rounded-2xl
                ${theme === "light"
                    ? "bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
                    : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] shadow-[20px_20px_60px_#0f0f0f,-20px_-20px_60px_#333333]"
                }
                transition-all duration-500
                ${skip.allows_heavy_waste ? "cursor-pointer" : "cursor-not-allowed opacity-75"}
                group
                hover:shadow-[inset_-12px_-12px_20px_#ffffff10,inset_12px_12px_20px_#00000080]
            `}
        >
            {/* Floating Price Tag */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="absolute top-4 left-0 z-10"
            >
                <div className="bg-primary px-4 py-2 rounded-r-full shadow-lg">
                    <span className="text-white font-bold">£{totalPrice.toFixed(2)}</span>
                </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl transform -translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl transform translate-x-16 translate-y-16" />
            </div>

            {/* Main Content */}
            <div className="relative p-6 pt-16">
                {/* Title */}
                <motion.h3
                    animate={{
                        y: isHovered ? -5 : 0,
                        scale: isHovered ? 1.05 : 1
                    }}
                    className="text-2xl font-bold mb-4 text-primary bg-clip-text"
                >
                    {skip.size} Yard Skip
                </motion.h3>

                {/* Specifications Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <NeomorphicSpecification label="Size" value={`${skip.size} Yards`} />
                    <NeomorphicSpecification label="Hire Period" value={`${skip.hire_period_days} Days`} />
                    <NeomorphicSpecification label="Transport Cost" value={`£${skip.transport_cost}`} />
                    <NeomorphicSpecification label="Per Tonne" value={`£${skip.per_tonne_cost}`} />
                    <div className="space-y-1">
                        <p className="text-tertiary text-sm">Status</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                            ${!skip.forbidden
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                            }`}
                        >
                            {!skip.forbidden ? "Available" : "Not Available"}
                        </span>
                    </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                    <h4 className="text-secondary font-medium mb-2">Features</h4>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <NeomorphicFeature key={index} feature={feature} index={index} />
                        ))}
                    </ul>
                </div>

                {/* Action Button */}
                <motion.button
                    whileHover={{ scale: skip.allows_heavy_waste ? 1.05 : 1 }}
                    whileTap={{ scale: skip.allows_heavy_waste ? 0.95 : 1 }}
                    disabled={!skip.allows_heavy_waste}
                    className={`
                        w-full py-3 px-4 rounded-xl font-medium text-white
                        bg-gradient-to-r from-primary to-primary/80
                        shadow-[0_10px_20px_-10px] shadow-primary/50
                        hover:shadow-[0_20px_30px_-15px] hover:shadow-primary/50
                        transition-all duration-300
                        ${!skip.allows_heavy_waste ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                >
                    {skip.allows_heavy_waste ? "Select Skip" : "Heavy Waste Not Allowed"}
                </motion.button>
            </div>

            {/* Interactive Shine Effect */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)",
                    transform: "translateX(-100%)",
                }}
                animate={isHovered ? { x: ["0%", "200%"] } : {}}
                transition={isHovered ? { duration: 1, repeat: Infinity, repeatDelay: 0.5 } : {}}
            />
        </motion.div>
    );
}; 