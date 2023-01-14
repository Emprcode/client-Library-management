import React from "react";
import { Button, Card } from "react-bootstrap";

export const BookCard = ({ book, user, fetchBooks }) => {
  return (
    <Card style={{ width: "18rem", border: "none" }}>
      <Card.Img src={book.thumbnail} />
      <Card.Body
        className="text-center"
        style={{ width: "50%", margin: "1rem auto" }}>
        <Card.Title>{book.title}</Card.Title>
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="warning">Borrow</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
