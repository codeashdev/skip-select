import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

interface NeomorphicDrawerProps {
    skip: Skip;
    onClose: () => void;
}

export const NeomorphicDrawer = ({ skip, onClose }: NeomorphicDrawerProps) => {
    const { theme } = useTheme();
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className={`
            absolute bottom-0 left-0 right-0 rounded-t-3xl p-6 shadow-xl
            ${theme === "light"
                            ? "bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
                            : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] shadow-[20px_20px_60px_#0f0f0f,-20px_-20px_60px_#333333]"
                        }
          `}
                >
                    {/* Drawer Handle */}
                    <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-6" />

                    <div className="max-w-3xl mx-auto">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-2">
                                    {skip.size} Yard Skip
                                </h2>
                                <p className="text-tertiary">
                                    {skip.area ? `Available in ${skip.area}` : "Available in All Areas"}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-primary">£{totalPrice.toFixed(2)}</p>
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2
                  ${!skip.forbidden
                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                                    }`}
                                >
                                    {!skip.forbidden ? "Available" : "Not Available"}
                                </span>
                            </div>
                        </div>

                        {/* Specifications Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="space-y-1">
                                <p className="text-tertiary">Size</p>
                                <p className="text-secondary font-medium">{skip.size} Yards</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-tertiary">Hire Period</p>
                                <p className="text-secondary font-medium">{skip.hire_period_days} Days</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-tertiary">Transport Cost</p>
                                <p className="text-secondary font-medium">£{skip.transport_cost}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-tertiary">Per Tonne Cost</p>
                                <p className="text-secondary font-medium">£{skip.per_tonne_cost}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-tertiary">Price (Before VAT)</p>
                                <p className="text-secondary font-medium">£{skip.price_before_vat.toFixed(2)}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-tertiary">VAT ({skip.vat}%)</p>
                                <p className="text-secondary font-medium">£{(skip.price_before_vat * (skip.vat / 100)).toFixed(2)}</p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-secondary mb-4">Features</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <li className="flex items-center text-tertiary">
                                    <svg
                                        className="w-5 h-5 mr-3 text-primary"
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
                                    {skip.allowed_on_road ? "Allowed on Road" : "Not Allowed on Road"}
                                </li>
                                <li className="flex items-center text-tertiary">
                                    <svg
                                        className="w-5 h-5 mr-3 text-primary"
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
                                    {skip.allows_heavy_waste ? "Heavy Waste Allowed" : "No Heavy Waste"}
                                </li>
                                <li className="flex items-center text-tertiary">
                                    <svg
                                        className="w-5 h-5 mr-3 text-primary"
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
                                    Postcode: {skip.postcode}
                                </li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`
                  flex-1 py-3 px-4 rounded-xl font-medium text-white
                  bg-gradient-to-r from-primary to-primary/80
                  shadow-[0_10px_20px_-10px] shadow-primary/50
                  hover:shadow-[0_20px_30px_-15px] hover:shadow-primary/50
                  transition-all duration-300
                `}
                                onClick={onClose}
                            >
                                Book Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`
                  py-3 px-4 rounded-xl font-medium text-tertiary
                  hover:text-secondary transition-colors
                `}
                                onClick={onClose}
                            >
                                Close
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}; 