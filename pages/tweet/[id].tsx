import { fetchTweetById } from "api/tweet";
import FeedItem from "components/FeedList/FeedItem";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import FunctionalIcon from "components/FeedList/FeedItem/FunctionalIcon";
import Return from "icons/return.png";
import { useUserStore } from "state/userStore";

export default function TweetPage() {
  const { query, back } = useRouter();
  const user = useUserStore((s) => s.currentUser);
  const [errMsg, setErrMsg] = useState("");
  const [tweet, setTweet] = useState<LikeTwritter.Tweet>();

  useEffect(() => {
    if ("id" in query) {
      const tweetId = query.id as string;
      if (tweetId) {
        const fetchedTweet = fetchTweetById(parseInt(tweetId));
        if (fetchedTweet) {
          setTweet(fetchedTweet);
        } else {
          setErrMsg("没有找到推文");
        }
      } else {
        setErrMsg("推文 id 输入错误");
      }
    }
  }, [query]);

  return (
    <div>
      <div style={{ padding: 8 }}>
        <FunctionalIcon
          type="return"
          src={Return}
          onClick={() => {
            back();
          }}
        />
      </div>
      {errMsg ? (
        errMsg
      ) : tweet ? (
        <FeedItem
          singleDetail
          ind={parseInt(query.ind as string)}
          isMine={query.thisTweetOwner === user}
          item={tweet as LikeTwritter.Tweet}
        />
      ) : (
        ""
      )}
    </div>
  );
}

TweetPage.getLayout = function getLayout(page: any) {
  return (
    <Row>
      <Col xs={12} sm={8}>
        {page}
      </Col>
      <Col className="d-none d-sm-block" sm={4}>
        456
      </Col>
    </Row>
  );
};
