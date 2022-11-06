import FeedList from "components/FeedList";
import SpinContainer from "components/Loading/verticalLoading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useUserStore } from "state/userStore";

function useVerifyUserIdentify() {
  const [verifing, setVerify] = useState(true);
  const { query, push } = useRouter();
  const currentUser = useUserStore((s) => s.currentUser);
  const userIdInUrl = query.username;

  useEffect(() => {
    if (currentUser === userIdInUrl) {
      setVerify(false);
      return;
    } else {
      push("/");
    }
  }, []);

  return {
    verifing,
  };
}

export default function Feed() {
  const { verifing } = useVerifyUserIdentify();

  return (
    <SpinContainer loading={verifing} text="身份认证中">
      <Row>
        <Col xs={12} sm={8}>
          <FeedList />
        </Col>
        <Col className="d-none d-sm-block" sm={4}>
          <div
            style={{
              marginTop: 20,
              background: "grey",
              borderRadius: 10,
              padding: 10,
              height: 300,
              width: "100%",
            }}
          >
            Just For Responsive
          </div>
          <div
            style={{
              marginTop: 20,
              background: "grey",
              borderRadius: 10,
              padding: 10,
              height: 300,
              width: "100%",
            }}
          >
            Just For Responsive1
          </div>
        </Col>
      </Row>
    </SpinContainer>
  );
}
