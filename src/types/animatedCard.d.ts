interface AnimatedCardProps {
  skip: Skip;
  isFlipped: boolean;
  onFlip: () => void;
}

interface CardFrontProps {
  skip: Skip;
  isHovered: boolean;
  onFlip: (e: React.MouseEvent) => void;
}

interface CardBackProps {
  skip: Skip;
  onFlip: (e: React.MouseEvent) => void;
}