import React from "react";
import { cn } from "@/lib/utils";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
}

const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 50,
}) => {
  return (
    <div
      className={cn(
        "absolute size-9 rounded-full bg-[#111] flex items-center justify-center text-white animate-orbit",
        reverse && "animation-direction:reverse",
        className
      )}
      style={{
        "--duration": duration,
        "--delay": `${delay}s`,
        "--radius": radius,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default OrbitingCircles;