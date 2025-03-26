import { CheckCircle, XCircle } from "lucide-react";

export const ActionButton = ({ isDisabled, onSelect }: ActionButtonProps) => {
	if (isDisabled) {
		return (
			<button
				disabled
				className="w-full bg-border text-tertiary px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium cursor-not-allowed"
			>
				<XCircle size={18} />
				Not Available for Heavy Waste
			</button>
		);
	}

	return (
		<button
			onClick={onSelect}
			className="w-full bg-primary duration-300 cursor-pointer text-white px-4 py-2.5 rounded-lg hover:bg-primary/80 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-medium"
		>
			<CheckCircle size={18} />
			Select Skip
		</button>
	);
};
