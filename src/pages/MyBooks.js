import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { DashBoardLayout } from "../components/layout/DashBoardLayout";
import { getBorrowedBooks, returnBook } from "../helpers/axiosHelper.js";

export const MyBooks = () => {
  const [books, setBooks] = useState([]);

  const fetchBooksBorrowed = async () => {
    const res = await getBorrowedBooks();
    setBooks(res);
  };
  useEffect(() => {
    fetchBooksBorrowed();
  }, []);

  const handleOnReturn = async (bookId) => {
    if (window.confirm(`Are you sure you want to return this book?`)) {
      const { status, message } = await returnBook(bookId);
      toast[status](message);

      status === "success" && fetchBooksBorrowed();
    }
  };

  return (
    <DashBoardLayout>
      <Container>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>book</th>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((book, i) => (
                <tr key={book._id} className="text-center">
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={book.thumbnail}
                      alt="book-img"
                      style={{ width: "30%" }}
                    />
                  </td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleOnReturn(book._id)}>
                      Return
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </DashBoardLayout>
  );
};
