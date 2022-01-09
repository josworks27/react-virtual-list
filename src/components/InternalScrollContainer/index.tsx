import React, { ReactNode } from "react";

export interface InternalScrollContainerProps {
  height: number;
  children?: ReactNode;
}

export const InternalScrollContainer = ({
  height,
  children,
}: InternalScrollContainerProps) => {
  return (
    <div
      style={{
        height,
      }}
    >
      {children}
    </div>
  );
};
