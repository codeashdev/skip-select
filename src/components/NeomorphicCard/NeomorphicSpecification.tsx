export const NeomorphicSpecification = ({ label, value }: NeomorphicSpecificationProps) => {
    return (
        <div className="space-y-1">
            <p className="text-tertiary text-sm">{label}</p>
            <p className="text-secondary font-medium">{value}</p>
        </div>
    );
}; 