interface AirbnbSkipListing {
    skip: Skip;
    images: {
        url: string;
        alt: string;
    }[];
    rating: number;
    reviews: number;
    isSuperhost: boolean;
    dates: {
        start: string;
        end: string;
    };
    isFavorite: boolean;
}

interface AirbnbCardProps {
    listing: AirbnbSkipListing;
    onFavorite?: (id: number) => void;
    onClick?: (id: number) => void;
}

interface ImageCarouselProps {
    images: AirbnbSkipListing['images'];
    skipId: number;
}

interface RatingBadgeProps {
    rating: number;
    reviews: number;
} 