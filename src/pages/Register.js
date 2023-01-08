import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputFields } from "../components/InputFields.js";
import { Layout } from "../components/layout/Layout";
import { createUser } from "../helpers/axiosHelper.js";

export const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnDelete = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = formData;

    if (confirmPassword !== rest.password) {
      return toast.error("Password does not match!");
    }

    const { status, message } = await createUser(rest);
    toast[status](message);

    status === "success" && navigate("/");
  };
  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "sam",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "sss",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "sam@gmail.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*******",
      required: true,
    },
  ];
  return (
    <Layout>
      <Container>
        <Row className="mt-5 mb-3">
          <Col className="md-6 text-center d-flex align-items-center d-none d-md-flex info">
            <div>
              <h1>Welcome to the Library Management System</h1>
              <hr />
              <p>
                Register to access our library management system. You can view
                and borrow books.
              </p>
            </div>
          </Col>
          <Col className="md-6 bg-warning p-5 rounded">
            <div className="bg-light p-4 rounded">
              <Form onSubmit={handleOnDelete}>
                <h2>Register</h2>
                <hr />
                {inputFields.map((item, i) => (
                  <InputFields key={i} {...item} onChange={handleOnChange} />
                ))}
                <Form.Group className="mb-3">
                  <Form.Select name="role" required onChange={handleOnChange}>
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="I agree to terms and conditon"
                    required></Form.Check>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
              <div>
                Already have an account? <Link to="/">Login Here</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
