import { MapPin, AlertTriangle } from "lucide-react";
import cardImage from "../../assets/cardImage.jpg";

export const StandardImage = ({
	size,
	isDisabled,
	allowedOnRoad,
	allowsHeavyWaste,
}: SkipImageProps) => {
	return (
		<div className="relative h-52 border-b border-border">
			<img
				src={cardImage}
				alt={`${size} Yard Skip`}
				className={`w-full h-full object-cover rounded-t-md ${isDisabled ? "grayscale" : ""}`}
			/>
			{/* Badges */}
			<div className="absolute top-3 left-3 flex flex-col gap-2">
				{!allowedOnRoad && (
					<span className="bg-yellow-500/90 text-white px-3.5 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-1.5 shadow-sm">
						<MapPin size={16} className="stroke-[2.5]" />
						Private Property Only
					</span>
				)}
				{!allowsHeavyWaste && (
					<span className="bg-red-500/90 text-white px-3.5 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-1.5 shadow-sm">
						<AlertTriangle size={16} className="stroke-[2.5]" />
						Heavy Waste Not Allowed
					</span>
				)}
			</div>
			{/* Size Badge */}
			<div className="absolute bottom-3 left-3 bg-badge transition-colors duration-300 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
				<span className="text-lg font-semibold text-primary">
					{size} Yard Skip
				</span>
			</div>
		</div>
	);
};
