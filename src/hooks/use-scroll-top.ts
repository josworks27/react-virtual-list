import { useEffect, useRef, useState } from "react";

export const useScrollTop = (): [
  number,
  React.MutableRefObject<HTMLDivElement | null>
] => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (e: any) => {
    requestAnimationFrame(() => {
      setScrollTop(e.target.scrollTop);
    });
  };

  useEffect(() => {
    const scrollContainer = ref.current;

    if (!scrollContainer) return;

    scrollContainer.addEventListener("scroll", handleScroll);
    setScrollTop(scrollContainer.scrollTop);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrollTop, ref];
};
