import Image from "next/image";

interface LoadingIconProps {
    width: number;
    height: number;
    className?: string;
};

export function LoadingIcon({ width, height, className }: LoadingIconProps) {
    return (
        <div>
            <Image src="/loading.svg" alt="LoadingIcon" width={width} height={height} className={className}/>
        </div>
    );
}