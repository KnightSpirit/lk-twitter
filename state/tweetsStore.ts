import { fetchTweetsByTimeDesc } from "api/tweet";
import {
  createTweets,
  deleteTweets,
  updateTweets,
} from "fake-db/tweets";
import create from "zustand";

type TweetsStore = {
  tweets: LikeTwritter.Tweet[];
  nextKey: number;
  total: number;
  create: (text: string, userId: string) => Result;
  delete: (tweetId: number, pos: number) => Result;
  update: (tweetId: number, text: string) => Result;
  fetchMoreTweets: () => void;
  reset: () => void;
};

export const useTweetsStore = create<TweetsStore>((set, get) => ({
  tweets: [],
  nextKey: 0,
  total: 0,
  reset: () => {
    set({tweets: [], nextKey: 0, total: 0})
  },
  create: (text, userId) => {
    // when create new tweets, refresh list
    const result = createTweets({ text, username: userId });
    set(() => {
      const { tweets, total } = fetchTweetsByTimeDesc(0);
      return { tweets, total, nextKey: 20 };
    });

    return result;
  },
  fetchMoreTweets: () => {
    const { tweets, total } = fetchTweetsByTimeDesc(get().nextKey);
    set((s) => ({ tweets: s.tweets.concat(tweets), total, nextKey: tweets.length + get().nextKey }))
  },

  update: (id: number, text: string) => {
    let result = updateTweets(id, text);

    set(() => {
      const { tweets, total} = fetchTweetsByTimeDesc(0, get().nextKey)
      return { tweets, total };
    });

    return result
  },

  delete: (id: number, pos: number) => {
    const result = deleteTweets(id);
    set((s) => {
      const _t = s.tweets;
      _t.splice(pos, 1);
      return { tweets: JSON.parse(JSON.stringify(_t)) };
    });
    return result;
  },
}));
