import React, { forwardRef, ReactNode, Ref } from "react";

export interface ExternalShapeWrapperProps {
  height: number;
  width?: number | string;
  // toDo: Fix to rollup-plugin-typescript2 semactic error
  refObject: Ref<HTMLDivElement>;
  children?: ReactNode;
}

export const ExternalShapeWrapper = (props) => {
  const { height, width = "100%", children, refObject } = props;

  return (
    <div
      style={{
        height,
        width,
        overflowY: "auto",
      }}
      ref={refObject}
    >
      {children}
    </div>
  );
};
