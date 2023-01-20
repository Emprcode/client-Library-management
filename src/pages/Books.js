import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { BooksList } from "../components/BooksList.js";
import { DashBoardLayout } from "../components/layout/DashBoardLayout.js";
import { getBooks } from "../helpers/axiosHelper.js";

export const Books = () => {
  const [user, setUser] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    setUser(u);
  }, []);

  const fetchBooks = async () => {
    const response = await getBooks();
    setBooks(response.books);
    // console.log(response);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <DashBoardLayout>
      <Container>
        <Row className="p-5">
          <BooksList books={books} fetchBooks={fetchBooks} user={user} />
        </Row>
      </Container>
    </DashBoardLayout>
  );
};
