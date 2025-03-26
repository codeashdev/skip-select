export const LoadingSpinner = () => {
    return (
        <div 
            role="status" 
            aria-label="Loading"
            className="flex justify-center items-center"
        >
            <svg 
                className="animate-spin" // Ensures smooth rotation across all devices
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="xMidYMid"
                style={{ 
                    shapeRendering: "auto", 
                    display: "block", 
                    background: "transparent",
                    width: "100%",
                    height: "100%"
                }}
                aria-hidden="true"
            >
                <g>
                    <path 
                        strokeWidth="12" 
                        stroke="currentColor"
                        fill="none" 
                        d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
                    />
                    <path 
                        fill="currentColor" 
                        d="M49 3L49 27L61 15L49 3"
                    />
                </g>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
