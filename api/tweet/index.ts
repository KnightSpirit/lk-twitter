import dayjs from "dayjs";
import { createTweets, getTweets, getTweetsById } from "fake-db/tweets";

const defaultPullSize = 20;

export function fetchTweetById(id: LikeTwritter.TweetId) {
  return getTweetsById(id);
}

export function fetchTweetsByTimeDesc(from?: number, then?: number) {
  const tweets = getTweets();
  tweets.sort((a, b) =>
    dayjs(a.timestamp).unix() - dayjs(b.timestamp).unix() > 0 ? -1 : 1
  );
  const _from = from || 0;
  return {
    tweets: tweets.slice(_from, then || _from + defaultPullSize),
    total: tweets.length,
  };
}

export function postTweet(text: string, userId: string) {
  return createTweets({ text, username: userId });
}
