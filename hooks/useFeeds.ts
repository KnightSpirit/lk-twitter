import { fetchTweetsByTimeDesc } from "api/tweet";
import { useEffect, useRef, useState } from "react";
import { useTweetsStore } from "state/tweetsStore";

export function useFeeds() {
  const feeds = useTweetsStore((s) => s.tweets);
  const fillFeeds = useTweetsStore((s) => s.fillFeeds);
  const [nextKey, setNextKey] = useState<number>(0);
  let recordsCount = useRef(0);

  function fetchTweets(_nextKey: number, reset?: boolean) {
    const { tweets, total } = fetchTweetsByTimeDesc(_nextKey);
    setTimeout(() => {
      recordsCount.current = total;
      fillFeeds(reset ? [...tweets] : [...feeds.concat(tweets)]);
    }, 1000);
  }

  useEffect(() => {
    fetchTweets(nextKey);
  }, [nextKey]);

  return {
    refreshList: () => fetchTweets(0, true),
    feeds,
    fetchMoreData: () =>
      setNextKey((p) => {
        return p < recordsCount.current ? p + 20 : recordsCount.current;
      }),
  };
}
