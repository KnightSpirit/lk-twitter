import { deleteTweets, updateTweets } from "fake-db/tweets";
import create from "zustand";

type TweetsStore = {
  tweets: LikeTwritter.Tweet[];
  delete: (tweetId: number, pos: number) => void;
  update: (tweetId: number, text: string) => void;
  fillFeeds: (tweets: LikeTwritter.Tweet[]) => void;
};

export const useTweetsStore = create<TweetsStore>((set) => ({
  tweets: [],
  fillFeeds: (tweets) => {
    set({ tweets });
  },

  update: (id: number, text: string) => {
    set((s) => {
      const tweet = s.tweets.find((t) => t.id === id);
      if (tweet) {
        tweet.text = text;
        updateTweets(tweet.id, text);
        return { tweets: JSON.parse(JSON.stringify(s.tweets)) };
      }
      return { tweets: s.tweets };
    });
  },

  delete: (id: number, pos: number) => {
    deleteTweets(id);
    set((s) => {
      const _t = s.tweets;
      _t.splice(pos, 1);
      return { tweets: JSON.parse(JSON.stringify(_t)) };
    });
  },
}));
