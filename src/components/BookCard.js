import React from "react";
import { Button, Card } from "react-bootstrap";
import { BorrowBook, deleteBook } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

export const BookCard = ({ book, user, fetchBooks }) => {
  const handleOnBorrow = async (bookId) => {
    if (bookId) {
      // const response = await BorrowBook(bookId);
      const { status, message } = await BorrowBook(bookId);
      toast[status](message);
    }
  };
  const handleOnDelete = async (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      if (bookId) {
        const { status, message } = await deleteBook(bookId);
        toast[status](message);
        status === "success" && fetchBooks();
      }
    }
  };

  return (
    <Card style={{ width: "18rem", border: "none" }}>
      <Card.Img src={book.thumbnail} />
      <Card.Body
        className="text-center"
        style={{ width: "50%", margin: "1rem auto" }}>
        <Card.Title>{book.title}</Card.Title>
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="warning" onClick={() => handleOnBorrow(book._id)}>
            Borrow
          </Button>
          {user?.role === "teacher" && (
            <>
              <Button variant="danger" onClick={() => handleOnDelete(book._id)}>
                Delete
              </Button>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
