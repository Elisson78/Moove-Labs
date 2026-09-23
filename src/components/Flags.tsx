import React from "react";

interface FlagProps {
  className?: string;
  size?: number;
}

export function FlagBR({ className = "w-5 h-3.5", size }: FlagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 504"
      className={`rounded-[2px] shadow-xs object-cover shrink-0 inline-block ${className}`}
      style={size ? { width: size, height: (size * 7) / 10 } : undefined}
      aria-hidden="true"
    >
      {/* Green Field */}
      <rect width="720" height="504" fill="#009b3a" rx="16" />
      {/* Yellow Rhombus */}
      <polygon points="360,45 660,252 360,459 60,252" fill="#fedf00" />
      {/* Blue Disc */}
      <circle cx="360" cy="252" r="126" fill="#002776" />
      {/* White Curved Strip */}
      <path
        d="M234,252 A126,126 0 0,1 486,252 A140,140 0 0,0 234,252"
        fill="#ffffff"
      />
      {/* Central Star representation */}
      <circle cx="360" cy="225" r="4.5" fill="#ffffff" />
      <circle cx="330" cy="265" r="3.5" fill="#ffffff" />
      <circle cx="390" cy="270" r="3.5" fill="#ffffff" />
      <circle cx="360" cy="285" r="3" fill="#ffffff" />
      <circle cx="410" cy="285" r="2.5" fill="#ffffff" />
    </svg>
  );
}

export function FlagCH({ className = "w-5 h-5", size }: FlagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`rounded-[3px] shadow-xs object-cover shrink-0 inline-block ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      {/* Red Square Background */}
      <rect width="512" height="512" fill="#D52B1E" rx="32" />
      {/* Swiss White Cross */}
      {/* Vertical Bar: width 100, height 300 */}
      <rect x="206" y="106" width="100" height="300" fill="#FFFFFF" rx="4" />
      {/* Horizontal Bar: width 300, height 100 */}
      <rect x="106" y="206" width="300" height="100" fill="#FFFFFF" rx="4" />
    </svg>
  );
}
