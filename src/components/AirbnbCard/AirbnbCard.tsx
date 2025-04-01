import { motion } from 'framer-motion';
import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import cardImage from '../../assets/cardImage.jpg';
import { AirbnbDrawer } from './AirbnbDrawer';

interface AirbnbCardProps {
    skip: Skip;
}

export const AirbnbCard = ({ skip }: AirbnbCardProps) => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
    const isDisabled = !skip.allows_heavy_waste;

    const handleOpenDrawer = (e: React.MouseEvent) => {
        if (isDisabled) return;
        e.stopPropagation();
        setIsDrawerVisible(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseDrawer = () => {
        setIsDrawerVisible(false);
        document.body.style.overflow = "unset";
    };

    return (
        <>
            <motion.div
                whileHover={isDisabled ? {} : { y: -2 }}
                className={`group ${isDisabled ? 'opacity-90' : ''}`}
            >
                <div className="relative">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <img
                            src={cardImage}
                            alt={`${skip.size} Yard Skip`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {isDisabled && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                    <span className="text-white font-medium">Heavy waste not allowed</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-3 min-h-[180px] flex flex-col">
                    <div className="space-y-1 flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-medium text-secondary">
                                    {skip.size} Yard Skip
                                </h3>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-tertiary font-medium">
                                        {skip.allowed_on_road ? 'Road Permit Included' : 'Off-road Only'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="text-tertiary text-sm">
                            {skip.hire_period_days} days hire period
                        </div>

                        <div className="flex items-baseline gap-1">
                            <span className="font-semibold text-secondary">£{totalPrice.toFixed(2)}</span>
                            <span className="text-tertiary">total</span>
                        </div>

                        <div className="min-h-[40px] flex flex-col justify-end">
                            {skip.forbidden && (
                                <p className="text-red-500 text-sm">Currently unavailable in your area</p>
                            )}
                        </div>
                    </div>

                    <motion.button
                        onClick={handleOpenDrawer}
                        whileHover={isDisabled ? {} : { scale: 1.02 }}
                        whileTap={isDisabled ? {} : { scale: 0.98 }}
                        className={`
                            w-full mt-4 py-3 px-4 rounded-xl font-medium
                            flex items-center justify-center gap-2
                            transition-colors
                            ${isDisabled
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800'
                                : 'bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer'
                            }
                        `}
                        disabled={isDisabled}
                    >
                        Select Skip
                    </motion.button>
                </div>
            </motion.div>

            <AirbnbDrawer
                skip={skip}
                isVisible={isDrawerVisible}
                onClose={handleCloseDrawer}
            />
        </>
    );
}; 