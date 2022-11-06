import styles from "styles/Feed.module.scss";
import commonStyles from "styles/Common.module.scss";
import Edit from "icons/edit.png";
import Confirm from "icons/confirm.png";
import Delete from "icons/delete.png";
import { useTweetsStore } from "state/tweetsStore";
import { useState } from "react";
import { Form } from "react-bootstrap";
import FunctionalIcon from "./FunctionalIcon";
import { useRouter } from "next/router";
import { useUserStore } from "state/userStore";

export default function FeedItem(props: {
  singleDetail?: boolean;
  isMine: boolean;
  onClick?: Function;
  item: LikeTwritter.Tweet;
  ind: number;
}) {
  const { ind, onClick, item, isMine, singleDetail } = props;
  const deleteTweet = useTweetsStore((s) => s.delete);
  const updateTweet = useTweetsStore((s) => s.update);
  const user = useUserStore((s) => s.currentUser);
  const [tempEdit, setTempEdit] = useState(false);
  const [tempText, setTempText] = useState(item.text);
  const { push } = useRouter();
  return (
    <div className={styles.feed_layout} onClick={onClick}>
      <div className={`${commonStyles.feed_avatar} bg-info rounded-circle`}>
        <span>{item.owner.slice(0, 1)}</span>
      </div>
      <div className={styles.feed_content}>
        <div className={styles.feed_owner_name}>
          <span>{item.owner}</span>
          {isMine && (
            <div style={{ marginLeft: "auto" }}>
              {tempEdit ? (
                <FunctionalIcon
                  type="confirm"
                  src={Confirm}
                  onClick={() => {
                    updateTweet(item.id, tempText);
                    setTempEdit(false);
                  }}
                />
              ) : (
                <>
                  <FunctionalIcon
                    type="edit"
                    src={Edit}
                    onClick={() => {
                      setTempEdit(true);
                    }}
                  />
                  <FunctionalIcon
                    type="delete"
                    src={Delete}
                    onClick={() => {
                      deleteTweet(item.id, ind);
                      if (singleDetail) {
                        push(`/${user}`);
                      }
                    }}
                  />
                </>
              )}
            </div>
          )}
        </div>
        {tempEdit ? (
          <div onClick={(e) => e.stopPropagation()}>
            <Form.Control
              as="textarea"
              type="textarea"
              value={tempText}
              onChange={(t) => {
                setTempText(t.target.value);
              }}
            ></Form.Control>
          </div>
        ) : (
          item.text
        )}

        <div className={styles.feed_meta_info}>
          <div className={styles.feed_timespan}>{item.timestamp}</div>
          <div>id: {item.id}</div>
        </div>
      </div>
    </div>
  );
}
