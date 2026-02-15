export default function Loading() {
    return (
        <div className="min-h-[50vh] flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border-4 border-secondary border-t-primary rounded-full animate-spin"></div>
                <div className="text-primary font-medium animate-pulse">Loading...</div>
            </div>
        </div>
    );
}
