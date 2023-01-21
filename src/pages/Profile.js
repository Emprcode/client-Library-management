import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { DashBoardLayout } from "../components/layout/DashBoardLayout";
import { updatePasswordinForm } from "../helpers/axiosHelper";

const initialState = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const Profile = () => {
  const [user, setUser] = useState({});
  const [updatePassword, setUpdatePassword] = useState(initialState);
  const [showPassForm, setShowPassForm] = useState(false);

  const handleOnPassChange = (e) => {
    const { name, value } = e.target;
    setUpdatePassword({
      ...updatePassword,
      [name]: value,
    });
  };
  //   console.log(updatePassword);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { currentPassword, password, confirmPassword } = updatePassword;

    if (confirmPassword !== password) {
      return toast.error("Password does not match!");
    }

    const { status, message } = await updatePasswordinForm({
      currentPassword,
      password,
    });

    toast[status](message);
    setUpdatePassword(initialState);
  };
  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    setUser(u);
  }, []);
  return (
    <DashBoardLayout>
      <Modal show={showPassForm} onHide={() => setShowPassForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  name="currentPassword"
                  placeholder="Enter your current password"
                  value={updatePassword.currentPassword}
                  onChange={handleOnPassChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  value={updatePassword.Password}
                  onChange={handleOnPassChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  value={updatePassword.confirmPassword}
                  onChange={handleOnPassChange}
                />
              </Form.Group>
              <Button variant="warning" type="submit">
                Update Password
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      <Container>
        <Row className="p-5">
          <Col md={8}>
            <div className="profile-left">
              <ul>
                <li>
                  <strong>Profile ID: </strong> {user?.id}
                </li>
                <li>
                  <strong>Name: </strong> {`${user?.fName} ${user?.lName}`}
                </li>
                <li>
                  <strong> Email: </strong> {user?.email}
                </li>
                <li>
                  <strong>Status</strong>
                  <span
                    className={
                      user?.status === "active" ? "text-success" : "text-danger"
                    }>
                    {" "}
                    {user?.status}{" "}
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="d-flex flex-column gap-4">
            <Button variant="warning">Edit Details</Button>
            <Button variant="dark" onClick={() => setShowPassForm(true)}>
              Update Password
            </Button>
          </Col>
        </Row>
      </Container>
    </DashBoardLayout>
  );
};
