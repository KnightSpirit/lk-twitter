import { postTweet } from "api/tweet";
import { useState } from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useUserStore } from "state/userStore";

interface PostProps {
  refresh: () => void;
}

export default function Post(props: PostProps) {
  const { refresh } = props;
  const user = useUserStore((s) => s.currentUser);
  const [tweetText, setText] = useState("");
  return (
    <FloatingLabel
      style={{
        borderBottom: "1px solid rgb(254,254,254)",
      }}
      controlId="floatingTextarea2"
      label="发文"
    >
      <Form.Control
        value={tweetText}
        onChange={(v) => {
          setText(v.target.value);
        }}
        as="textarea"
        placeholder="发文"
        style={{
          height: "80px",
          marginTop: 8,
        }}
      />
      <Button
        style={{ marginTop: 8, float: "right" }}
        onClick={() => {
          const result = postTweet(tweetText, user);
          if (!result.error) {
            refresh();
            setText("");
          }
        }}
      >
        确定
      </Button>
      <div style={{ clear: "both" }}></div>
    </FloatingLabel>
  );
}
