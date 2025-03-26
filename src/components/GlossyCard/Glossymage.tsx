import { MapPin, AlertTriangle } from "lucide-react";
import cardImage from '../../assets/cardImage.jpg';

export const GlossyImage = ({ size, isDisabled, allowedOnRoad, allowsHeavyWaste }: GlossySkipImageProps) => {
  return (
    <div className="relative h-48" role="img" aria-label={`${size} Yard Skip${!allowedOnRoad ? ', private property only' : ''}${!allowsHeavyWaste ? ', no heavy waste allowed' : ''}`}>
      <img
        src={cardImage}
        alt={`${size} Yard Skip`}
        className={`w-full h-full object-cover ${isDisabled ? 'grayscale' : ''}`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" aria-hidden="true" />

      {/* Size badge */}
      <div
        className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold shadow-lg"
        role="text"
        aria-label={`Skip size: ${size} yards`}
      >
        {size} Yard Skip
      </div>

      {/* Warning badges */}
      <div className="absolute top-4 right-4 flex flex-col gap-2" role="list" aria-label="Skip restrictions">
        {!allowedOnRoad && (
          <div
            className="bg-yellow-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-lg"
            role="listitem"
          >
            <MapPin size={14} className="stroke-[2.5]" aria-hidden="true" />
            <span>Private Only</span>
          </div>
        )}
        {!allowsHeavyWaste && (
          <div
            className="bg-red-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-lg"
            role="listitem"
          >
            <AlertTriangle size={14} className="stroke-[2.5]" aria-hidden="true" />
            <span>No Heavy Waste</span>
          </div>
        )}
      </div>
    </div>
  );
}; 