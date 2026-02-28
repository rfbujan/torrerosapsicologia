import { cn } from "@/lib/utils";

interface PinkTowerProps {
    className?: string;
}

export function PinkTower({ className }: PinkTowerProps) {
    // 10 cubes, graduating in size. Size 10 is bottom, size 1 is top.
    const blocks = Array.from({ length: 10 }, (_, i) => {
        const k = i; // top to bottom indices 0..9
        const size = k + 1;
        const y = (k * (k + 1)) / 2;

        return { size, y, id: k };
    });

    return (
        <svg
            viewBox="0 0 10 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-full h-auto text-primary", className)}
            aria-hidden="true"
        >
            {blocks.map((block) => (
                <rect
                    key={block.id}
                    x={(10 - block.size) / 2} // Center horizontally
                    y={block.y}
                    width={block.size}
                    height={block.size}
                    className="fill-current"
                />
            ))}
        </svg>
    );
}
