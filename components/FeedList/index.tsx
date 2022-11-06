import Post from "components/Post";
import { useFeeds } from "hooks/useFeeds";
import { useIntersectionObserverble } from "hooks/useIntersectionObserver";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useUserStore } from "state/userStore";
import FeedItem from "./FeedItem";
import Logout from "icons/logout.png";
import Theme from "icons/theme.png";
import { useThemeStore } from "state/theme";

export default function FeedList() {
  const { feeds, fetchMoreData, refreshList } = useFeeds();
  const listening = useRef(false);
  const user = useUserStore((s) => s.currentUser);
  const setMode = useThemeStore((s) => s.setMode);
  const theme = useThemeStore((s) => s.theme);
  const logout = useUserStore((s) => s.logOut);
  const router = useRouter();

  const { listen } = useIntersectionObserverble(fetchMoreData);

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
    if (feeds.length > 0) {
      if (!listening.current) {
        listening.current = true;
        listen("#next");
      }
    }
  }, [feeds]);

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <Image
          width={30}
          height={30}
          alt="logout"
          src={Logout}
          onClick={() => {
            logout();
            router.push("/");
          }}
        />
        <Image
          width={30}
          height={30}
          alt="theme"
          src={Theme}
          onClick={() => {
            setMode(theme === "dark" ? "normal" : "dark");
          }}
        />
      </div>
      <Post refresh={refreshList} />
      {feeds.length > 0 && (
        <>
          {feeds.map((v, ind) => {
            return (
              <FeedItem
                isMine={user === v.username}
                ind={ind}
                onClick={() => toPage(v, ind)}
                item={v}
                // key={v.id}
              />
            );
          })}
          <div id="next" style={{ padding: 6 }}></div>
        </>
      )}
    </>
  );
}
