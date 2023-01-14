import React from "react";
import { BookCard } from "./BookCard";

export const BooksList = ({ books, user, fetchBooks }) => {
  return (
    <div className="book-list">
      BooksList
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          user={user}
          fetchBooks={fetchBooks}
        />
      ))}
    </div>
  );
};
