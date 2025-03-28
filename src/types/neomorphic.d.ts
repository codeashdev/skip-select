interface NeomorphicCardProps {
    skip: Skip;
    onClick: () => void;
}

interface NeomorphicFeatureProps {
    feature: string;
    index: number;
}

interface NeomorphicSpecificationProps {
    label: string;
    value: string | number;
}

interface NeomorphicDrawerProps {
    skip: Skip;
    onClose: () => void;
}