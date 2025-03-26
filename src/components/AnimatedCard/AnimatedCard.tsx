import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";


export const AnimatedCard = ({ skip, isFlipped, onFlip }: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Initialize motion values for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create smooth spring animations for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate normalized values from -0.5 to 0.5
    const normalizedX = (event.clientX - centerX) / (rect.width / 2);
    const normalizedY = (event.clientY - centerY) / (rect.height / 2);

    // Clamp values between -0.5 and 0.5
    const clampedX = Math.max(-0.5, Math.min(0.5, normalizedX));
    const clampedY = Math.max(-0.5, Math.min(0.5, normalizedY));

    mouseX.set(clampedX);
    mouseY.set(clampedY);
  };

  const handleMouseLeave = () => {
    // Reset to neutral position
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };


  // Combined card variants with flip functionality
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
    front: { rotateY: 0 },
    back: { rotateY: -180 }
  };

  // Handle card flip with animation
  const handleFlip = (e: React.MouseEvent) => {
    // Reset rotations before flipping
    mouseX.set(0);
    mouseY.set(0);
    e.stopPropagation();
    onFlip();
  };

  return (
    <div
      className="relative [perspective:1000px] w-full"
      role="article"
      aria-label={`${skip.size} cubic yard skip details`}
    >
      <motion.div
        ref={cardRef}
        className="relative w-full h-full min-h-[27rem] rounded-md overflow-hidden shadow-md"
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate={isFlipped ? "back" : "front"}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={handleMouseLeave}
        onMouseMove={handleMouseMove}
        transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
        style={{
          rotateX,
          rotateY,
        }}
        role="button"
        aria-expanded={isFlipped}
        aria-label={`${isFlipped ? 'View less' : 'View more'} details about ${skip.size} cubic yard skip`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onFlip();
          }
        }}
      >
        <AnimatePresence mode="sync" initial={false}>
          {!isFlipped ? (
            <CardFront
              skip={skip}
              isHovered={isHovered}
              onFlip={handleFlip}
            />
          ) : (
            <CardBack
              skip={skip}
              onFlip={handleFlip}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}; 