import React, { forwardRef, useImperativeHandle } from "react";

const Mapicon = forwardRef(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    useImperativeHandle(ref, () => ({
      startAnimation: () => {
        // Logique pour lancer l'animation
      },
      stopAnimation: () => {
        // Logique pour stopper l'animation
      },
    }));

    return (
      <svg
        width={size}
        height={size}
        stroke={color}
        strokeWidth={strokeWidth}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  },
);

Mapicon.displayName = "Mapicon";

export default Mapicon;
