declare namespace LikeTwritter {
  type UserId = string;

  interface User {
    username: UserId;
    firstname: string;
    password: string;
    tweets?: Tweet[];
  }

  interface Tweet {
    id: TweetId;
    text: string;
    timestamp: number | string;
    owner: string;
    username: UserId;
  }

  type TweetId = number;
  // Crud Tweet
  type CreateTweet = (tweet: Tweet) => Promise<string>;
  type UpdateTweet = (tweet: Tweet) => Promise<string>;
  type DeleteTweet = (id: TweetId) => Promise<boolean>;
  type GetTweets = (
    id?: TweetId | UserId,
    readCount?: number
  ) => Promise<Tweet | Tweet[]>;

  // Crud User
  type CreateAccount = (tweet: Tweet) => Promise<string>;

  type Login = (username: string, password: string) => Promise<void>;
}
