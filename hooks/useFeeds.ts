import { fetchTweetsByTimeDesc } from "api/tweet";
import { useEffect, useRef, useState } from "react";
import { useTweetsStore } from "state/tweetsStore";

export function useFeeds() {
  const feeds = useTweetsStore((s) => s.tweets);
  const fillFeeds = useTweetsStore((s) => s.fetchMoreTweets);

  useEffect(() => {
    fillFeeds()
  }, [])

  return {
    feeds
  };
}
