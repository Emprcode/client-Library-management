import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Layout } from "../components/layout/Layout";
import { loginUser } from "../helpers/axiosHelper";

const initialState = {
  email: "",
  password: "",
};

export const Login = () => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message, user } = await loginUser(formData);

    if (status === "success") {
      toast[status](message);
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      toast[status](message);
    }

    setFormData(initialState);
  };
  return (
    <Layout>
      <Container>
        <Row className="mt-5">
          <Col className="md-6 bg-warning p-5">
            <div className="bg-light p-4 rounded">
              <Form onSubmit={handleOnSubmit}>
                <h1 className="text-center">Login</h1>
                <hr />

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="sam@gmail.com"
                    required
                    onChange={handleOnChange}
                    value={formData.email}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="******"
                    required
                    onChange={handleOnChange}
                    value={formData.password}
                  />
                </Form.Group>
                <div className="mt-2">
                  <Button variant="warning" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
              <div className="text-center mt-3">
                Dont have an account? <Link to="/register">Register Here</Link>
              </div>
            </div>
          </Col>
          <Col className="md-6 text-center info d-flex align-items-center d-none d-md-flex">
            <div>
              <h1>Welcome to Library Management System</h1>
              <hr />
              <p>Login to view and start browsing books</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
