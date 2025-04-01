import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Truck, Scale, AlertCircle } from "lucide-react";
import cardImage from '../../assets/cardImage.jpg';

interface AirbnbDrawerProps {
    skip: Skip;
    isVisible: boolean;
    onClose: () => void;
}

export const AirbnbDrawer = ({ skip, isVisible, onClose }: AirbnbDrawerProps) => {
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50"
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl overflow-hidden"
                    >
                        <div className="max-w-3xl mx-auto p-6">
                            {/* Handle */}
                            <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-6" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 text-primary rounded-full hover:bg-muted/80 transition-colors"
                            >
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>

                            {/* Content */}
                            <div className="space-y-6">
                                {/* Header with Image */}
                                <div className="flex gap-6">
                                    <div className="w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
                                        <img
                                            src={cardImage}
                                            alt={`${skip.size} Yard Skip`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-semibold text-primary mb-2">
                                            {skip.size} Yard Skip
                                        </h2>
                                        <div className="flex items-center text-primary mb-2">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {skip.area || 'All Areas'} ({skip.postcode})
                                        </div>
                                        <div className="text-2xl font-semibold text-secondary">
                                            £{totalPrice.toFixed(2)}
                                            <span className="text-base font-normal text-muted-foreground ml-1">total</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-6 border-t border-b border-border py-6">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <h3 className="font-medium text-secondary">Hire Period</h3>
                                            <p className="text-muted-foreground text-primary">{skip.hire_period_days} days</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Truck className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <h3 className="font-medium text-secondary">Transport Cost</h3>
                                            <p className="text-muted-foreground text-primary">
                                                {skip.transport_cost ? `£${skip.transport_cost}` : 'Included'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Scale className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <h3 className="font-medium text-secondary">Per Tonne Cost</h3>
                                            <p className="text-muted-foreground text-primary">
                                                {skip.per_tonne_cost ? `£${skip.per_tonne_cost}` : 'N/A'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <h3 className="font-medium text-secondary">Restrictions</h3>
                                            <p className="text-muted-foreground text-primary">
                                                {skip.allows_heavy_waste ? 'Heavy waste allowed' : 'No heavy waste'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Price Breakdown */}
                                <div>
                                    <h3 className="font-medium text-secondary mb-4">Price Breakdown</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-primary">
                                            <span>Base Price</span>
                                            <span>£{skip.price_before_vat.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-primary">
                                            <span>VAT ({skip.vat}%)</span>
                                            <span>£{(skip.price_before_vat * (skip.vat / 100)).toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between font-medium text-primary pt-2 border-t border-border">
                                            <span>Total</span>
                                            <span>£{totalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`
                                        w-full py-3 px-4 rounded-xl font-medium text-white
                                        ${skip.forbidden
                                            ? 'bg-destructive cursor-not-allowed'
                                            : 'bg-gradient-to-r from-primary to-primary/80 cursor-pointer'
                                        }
                                        shadow-lg shadow-primary/25
                                        transition-all duration-300
                                    `}
                                    disabled={skip.forbidden}
                                >
                                    {skip.forbidden ? 'Currently Unavailable' : 'Book Now'}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}; 