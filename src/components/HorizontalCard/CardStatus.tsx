export const CardStatus = ({ size, allowedOnRoad }: CardStatusProps) => {
	return (
		<div className="md:w-1/3 h-[12rem] md:h-auto relative bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-8">
			<div className="text-center">
				<div className="text-4xl font-bold text-primary mb-2">{size}Yards</div>
			</div>
			<div className="absolute top-2 left-2 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
				{allowedOnRoad ? "Road Permit Ready" : "Private Only"}
			</div>
		</div>
	);
};
