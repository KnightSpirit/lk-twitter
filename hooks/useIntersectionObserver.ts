import { useEffect, useRef } from "react";
import { useTweetsStore } from "state/tweetsStore";

// 监听 listview fetch next dom 是否出现
export function useIntersectionObserverble() {
  const intersectionObserver = useRef<IntersectionObserver>();
  const fillFeeds = useTweetsStore((s) => s.fetchMoreTweets)
  useEffect(() => {
    intersectionObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      fillFeeds()
    });
    return () => {
      // if (intersectionObserver.current) intersectionObserver.current.disconnect()
    }
  }, []);

  return {
    listen: (id: string) =>
      intersectionObserver.current?.observe(
        document.querySelector(id) as Element
      ),
  };
}
