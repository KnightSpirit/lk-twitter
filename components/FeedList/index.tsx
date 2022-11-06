import Post from "components/Post";
import { useIntersectionObserverble } from "hooks/useIntersectionObserver";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useUserStore } from "state/userStore";
import FeedItem from "./FeedItem";
import Logout from "icons/logout.png";
import Theme from "icons/theme.png";
import { useThemeStore } from "state/theme";
import { useTweetsStore } from "state/tweetsStore";

export default function FeedList() {
  const listening = useRef(false);
  const feeds = useTweetsStore((s) => s.tweets);
  const { currentUser: user, logOut: logout } = useUserStore();
  const { setMode, theme } = useThemeStore();
  const router = useRouter();

  const { listen } = useIntersectionObserverble();

  function toPage(tweet: LikeTwritter.Tweet, ind: number) {
    router.push({
      pathname: `/tweet/${tweet.id}`,
      query: {
        ind,
        thisTweetOwner: tweet.username,
      },
    });
  }

  useEffect(() => {
    if (!listening.current) {
      listening.current = true;
      listen("#next");
    }
  }, []);

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <Image
          width={30}
          height={30}
          alt='logout'
          src={Logout}
          onClick={() => {
            logout();
            router.push("/");
          }}
        />
        <Image
          width={30}
          height={30}
          alt='theme'
          src={Theme}
          onClick={() => {
            setMode(theme === "dark" ? "normal" : "dark");
          }}
        />
      </div>
      <Post />
      {feeds.length > 0 && (
        <>
          {feeds.map((v, ind) => {
            return (
              <FeedItem
                isMine={user === v.username}
                ind={ind}
                onClick={() => toPage(v, ind)}
                item={v}
                key={v.id}
              />
            );
          })}
        </>
      )}
      <div id='next' style={{ padding: 6 }}></div>
    </>
  );
}
