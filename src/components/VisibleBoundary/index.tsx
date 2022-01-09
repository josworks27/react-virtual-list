import React, { FC, ReactNode } from "react";

export interface VisibleBoundaryProps {
  gap?: number | string;
  offsetY: number;
  children?: ReactNode;
}

export const VisibleBoundary = ({
  gap = 0,
  offsetY,
  children,
}: VisibleBoundaryProps) => {
  return (
    <ul
      style={{
        gap,
        transform: `translateY(${offsetY}px)`,
      }}
    >
      {children}
    </ul>
  );
};
