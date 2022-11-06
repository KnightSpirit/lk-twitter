import { Spinner } from "react-bootstrap";

type SpinInfo = {
  text: string;
  children: JSX.Element;
  loading: boolean;
};
export default function SpinContainer(props: SpinInfo) {
  const { loading, children, text } = props;
  return loading ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner animation="border" role="status"></Spinner>
      <span>{text}</span>
    </div>
  ) : (
    children
  );
}
