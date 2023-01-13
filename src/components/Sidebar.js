import React from "react";
import { Link } from "react-router-dom";
import books from "../assets/books.png";

export const Sidebar = () => {
  return (
    <aside>
      <div className="top ">
        <img src={books} alt="" />
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title"> MAIN</p>
          <Link to="/books" className="link">
            <li>
              <i className="fa-solid fa-book"></i> <span>All Books</span>
            </li>
          </Link>
          <Link to="/mybooks" className="link">
            <li>
              <i className="fa-solid fa-book-open-reader"></i>{" "}
              <span>My Books</span>
            </li>
          </Link>
          <Link to="/books/add" className="link">
            <li>
              <i className="fa-solid fa-book"></i>
              <span>Add books</span>
            </li>
          </Link>
          <Link to="/transaction" className="link">
            <li>
              <i className="fa-solid fa-book-open-reader"></i>
              <span>Transactions</span>
            </li>
          </Link>
          <h5 className="title">User</h5>
          <Link to="/profile" className="link">
            <li>
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};
