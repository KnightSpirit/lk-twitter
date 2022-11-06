import Link from "next/link";
import { useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { Formik } from "formik";
import { hasUser } from "fake-db/user";
import { useRouter } from "next/router";
import { useUserStore } from "state/userStore";

export default function Home() {
  const [hasError, setHasError] = useState(false);
  const login = useUserStore((s) => s.login);
  const router = useRouter();
  return (
    <div
      className="row justify-content-center"
      style={{
        alignItems: "center",
        position: "relative",
        padding: 20,
        paddingTop: 250,
      }}
    >
      <Toast
        style={{ width: "100vw", position: "absolute", top: 0, left: 0 }}
        delay={3000}
        show={hasError}
        autohide
        data-bs-autohide="true"
      >
        <Toast.Body>Username or password is wrong!</Toast.Body>
      </Toast>

      <h2>Like Twitter</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(value) => {
          const { username, password } = value;
          const error = hasUser(username, password);
          if (error.error) {
            setHasError(true);
            return;
          }

          login(username);
          router.push(`/${username}`);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                value={props.values.username}
                onChange={props.handleChange}
                name="username"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={props.values.password}
                onChange={props.handleChange}
                name="password"
                type="password"
                required
              />
            </Form.Group>
            <div>
              <Button type="submit">Login</Button>
              <Link style={{ marginLeft: 8 }} href="/register">
                no account? register
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
