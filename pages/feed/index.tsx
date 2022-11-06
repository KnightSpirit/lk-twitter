import FeedList from "components/FeedList";
import { Col, Row } from "react-bootstrap";

export default function Feed() {
  return <FeedList />;
}

Feed.getLayout = function getLayout(page: any) {
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
