declare namespace LikeTwritter {

  type UserId = string;

  interface User {
    username: UserId;
    firstname: string;
    password: string;
    tweets?: Tweet[];
  }

  interface Tweets {
    id: TweetId;
    text: string;
    timestamp: number;
	owner: UserId
  }

  type TweetId = string;
  // Crud Tweet
  type CreateTweet = (tweet: Tweets) => Promise<string>;
  type UpdateTweet = (tweet: Tweets) => Promise<string>;
  type DeleteTweet = (id: TweetId) => Promise<boolean>;
  type GetTweets = (id?: TweetId | UserId, readCount?: number) => Promise<Tweet | Tweet[]>;

  // Crud User
  type CreateAccount = (tweet: Tweets) => Promise<string>;

  type Login = (username: string, password: string) => Promise<void>;
}
