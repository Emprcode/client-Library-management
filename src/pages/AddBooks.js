import React, { useState } from "react";
import { Form, Button, Col, Spinner } from "react-bootstrap";
import { DashBoardLayout } from "../components/layout/DashBoardLayout";
import book from "../assets/books.png";
import { addBook } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

const initialState = {
  title:"",
  author:"",
  isbn:"",
  year:"",
  thumbnail:""
}

export const AddBooks = () => {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // console.log(formData);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { status, message } = await addBook(formData);
    toast[status](message);
    setIsLoading(false);
  };

  return (
    <DashBoardLayout>
      <div className="add">
        <div className="add-top">
          <h1>Add New Book</h1>
          <hr />
        </div>
        <div className="add-bottom">
          <Col md={7} className="d-none d-sm-block rounded">
            <img
              className="rounded"
              src={book}
              alt=""
              style={{ width: "80%" }}
            />
          </Col>
          <Col md={5} sm={12} xs={12}>
            <Form className="p-4" onSubmit={handleOnSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Book title"
                  type="text"
                  name="title"
                  required
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Authur</Form.Label>
                <Form.Control
                  placeholder="Author"
                  type="text"
                  name="author"
                  required
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  placeholder="ISBN"
                  type="text"
                  name="isbn"
                  required
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Year published</Form.Label>
                <Form.Control
                  placeholder="year published"
                  type="number"
                  name="year"
                  required
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                  placeholder="image address"
                  type="text"
                  name="thumbnail"
                  required
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button variant="warning" type="submit" className="m-4">
                Add Book{" "}
                <span>
                  {isLoading && <Spinner animation="border" variant="dark" />}
                </span>
              </Button>
            </Form>
          </Col>
        </div>
      </div>
    </DashBoardLayout>
  );
};
