import { CheckCircle, XCircle } from "lucide-react";

export const GlossyActionButton = ({ isDisabled, onSelect }: GlossyActionButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      onClick={(e) => {
        e.stopPropagation();
        if (!isDisabled) onSelect();
      }}
      aria-disabled={isDisabled}
      role="button"
      aria-label={isDisabled ? "Skip not available - No heavy waste allowed" : "Select this skip"}
      className={`
        relative w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium 
        transition-all duration-300 overflow-hidden backdrop-blur-sm border
        ${isDisabled
          ? 'bg-white/5 text-tertiary cursor-not-allowed border-white/5'
          : 'bg-primary/90 text-white hover:bg-primary/80 group-hover:shadow-lg cursor-pointer border-primary'
        }
      `}
    >
      {/* Button glass effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" aria-hidden="true" />

      {/* Hover highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2">
        {isDisabled ? (
          <>
            <XCircle size={18} className="opacity-80" aria-hidden="true" />
            <span>No Heavy Waste</span>
          </>
        ) : (
          <>
            <CheckCircle size={18} className="opacity-90" aria-hidden="true" />
            <span>Select Skip</span>
          </>
        )}
      </div>
    </button>
  );
}; 