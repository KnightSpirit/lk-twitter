import { useEffect, useRef } from "react";

export function useIntersectionObserverble(callback: Function) {
  const intersectionObserver = useRef<IntersectionObserver>();
  useEffect(() => {
    intersectionObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      callback();
    });
  }, []);

  return {
    listen: (id: string) =>
      intersectionObserver.current?.observe(
        document.querySelector(id) as Element
      ),
  };
}
