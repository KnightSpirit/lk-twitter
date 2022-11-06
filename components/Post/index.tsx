import { useState } from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useTweetsStore } from "state/tweetsStore";
import { useUserStore } from "state/userStore";

export default function Post() {
  const user = useUserStore((s) => s.currentUser);
  const post = useTweetsStore((s) => s.create);
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
          // TODO: 错误处理
          const result = post(tweetText, user);
          if (!result.error) {
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
