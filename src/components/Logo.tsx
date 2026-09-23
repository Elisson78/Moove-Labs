"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon";
  priority?: boolean;
}

export function Logo({
  className = "",
  size = "xl",
  variant = "full",
  priority = true,
}: LogoProps) {
  // Dimension definitions for the cropped full logo (aspect ratio approx 5.14:1)
  const fullDimensions = {
    sm: { width: 150, height: 29, className: "h-8 sm:h-9 w-auto" },
    md: { width: 190, height: 37, className: "h-10 sm:h-11 w-auto" },
    lg: { width: 230, height: 45, className: "h-11 sm:h-12 w-auto" },
    xl: { width: 280, height: 55, className: "h-12 sm:h-14 md:h-16 w-auto" },
  };

  // Dimension definitions for the icon symbol alone (square aspect ratio 1:1)
  const iconDimensions = {
    sm: { width: 36, height: 36, className: "w-8 h-8" },
    md: { width: 44, height: 44, className: "w-10 h-10" },
    lg: { width: 56, height: 56, className: "w-12 h-12" },
    xl: { width: 68, height: 68, className: "w-14 h-14" },
  };

  if (variant === "icon") {
    const dim = iconDimensions[size];
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <Image
          src="/logo-icon.png"
          alt="MooveLabs"
          width={dim.width}
          height={dim.height}
          priority={priority}
          className={`${dim.className} object-contain transition-transform duration-300 hover:scale-105`}
        />
      </div>
    );
  }

  const dim = fullDimensions[size];

  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <Image
        src="/logo.png"
        alt="MooveLabs - Software • AI • Automation"
        width={dim.width}
        height={dim.height}
        priority={priority}
        className={`${dim.className} object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
      />
    </div>
  );
}
