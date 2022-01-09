import React, { FC, ReactNode, useEffect } from "react";
import { ExternalShapeWrapper } from "./ExternalShapeWrapper";
import { InternalScrollContainer } from "./InternalScrollContainer";
import { VisibleBoundary } from "./VisibleBoundary";
import { useScrollTop } from "../hooks";

const DEFAULT_EXTRA_ITEM = 1;

export interface VirtualListProps {
  layout: {
    height: number;
    itemSize: number;
    width?: number | string;
    gap?: number | string;
  };
  list: any[];
  itemCount: number;
  renderItem: FC<any>;
  onChange?: (isShow: boolean) => void;
  onClick?: any;
  children?: ReactNode;
}

export const VirtualList = (props: VirtualListProps) => {
  const {
    layout,
    list,
    itemCount,
    renderItem: RenderItem,
    onChange,
    onClick,
  } = props;
  const { gap, height, itemSize, width } = layout;

  const [scrollTop, ref] = useScrollTop();

  const startIdx = Math.floor(scrollTop / itemSize);
  const endIdx = Math.floor(startIdx + DEFAULT_EXTRA_ITEM + height / itemSize);
  const visibleItems = list.slice(startIdx, endIdx);

  const scrollContainerHeight = Math.max(height, itemSize * itemCount);
  const offsetY = startIdx * itemSize;
  const isShowMoreButton = endIdx >= list.length;

  useEffect(() => {
    onChange?.(isShowMoreButton);
  }, [onChange, isShowMoreButton]);

  return (
    <ExternalShapeWrapper height={height} width={width} refObject={ref}>
      <InternalScrollContainer height={scrollContainerHeight}>
        <VisibleBoundary gap={gap} offsetY={offsetY}>
          {visibleItems.map((item) => {
            const { carClassId } = item;
            return (
              <RenderItem key={carClassId} data={item} onClick={onClick} />
            );
          })}
        </VisibleBoundary>
      </InternalScrollContainer>
    </ExternalShapeWrapper>
  );
};
