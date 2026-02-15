import { cn } from "@/lib/utils";

interface PinkTowerProps {
    className?: string;
}

export function PinkTower({ className }: PinkTowerProps) {
    // 10 cubes, graduating in size.
    // We'll use a viewBox that accommodates the stack.
    // Assuming base block is unit 10, next is 9, ..., top is 1.
    // Height stacked: 10+9+...+1 = 55 units.
    // Width: 10 units.

    const blocks = Array.from({ length: 10 }, (_, i) => {
        // i=0 -> size 1 (top), i=9 -> size 10 (bottom)
        // Wait, Montessori Pink Tower: usually largest at bottom. 
        // Let's index from top (0) to bottom (9).
        // Top block (k=0): size 1. Bottom block (k=9): size 10.
        const k = i;
        const size = k + 1;
        // Y position: 
        // Top block at y=0? No, stack starts at y=0 (top of smallest) to y=55 (bottom of largest).
        // y for a block k is sum of heights of blocks 0 to k-1.
        const y = (k * (k + 1)) / 2;

        return { size, y, id: k };
    });

    return (
        <svg
            viewBox="0 0 12 56" // Little padding width-wise
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-auto h-full text-primary", className)}
            aria-hidden="true"
        >
            {blocks.map((block) => (
                <rect
                    key={block.id}
                    x={(12 - block.size) / 2} // Center horizontally
                    y={block.y}
                    width={block.size}
                    height={block.size}
                    rx="0.5" // Slight rounding for "modern" feel
                    className="fill-current"
                />
            ))}
        </svg>
    );
}
