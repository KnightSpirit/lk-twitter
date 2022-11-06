import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import { createUser } from "fake-db/user";
import { useRouter } from "next/router";
import { useUserStore } from "state/userStore";

export default function Register() {
  const router = useRouter();
  const login = useUserStore((s) => s.login);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h3 style={{ marginBottom: 18 }}>Register</h3>
      <Formik
        onSubmit={(val: LikeTwritter.User) => {
          const result = createUser(val);
          if (result.error) {
            return;
          }

          const username = val.username;

          login(username);
          router.replace(`/${username}`);
        }}
        initialValues={{ username: "", firstname: "", password: "" }}
      >
        {({ handleSubmit, handleChange }) => {
          return (
            <Form
              className="row justify-content-center"
              onSubmit={handleSubmit}
            >
              <Form.Group className="col-10" controlId="username">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="col-10" controlId="firstname">
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="firstname"
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group className="col-10" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="password"
                  type="password"
                  required
                />
              </Form.Group>
              <div className="col-10" style={{ marginTop: 8 }}>
                <Button type="submit">Create</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
