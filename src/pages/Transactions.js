import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { DashBoardLayout } from "../components/layout/DashBoardLayout.js";
import { getAllTransactions } from "../helpers/axiosHelper.js";

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await getAllTransactions();
    setTransactions(res);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <DashBoardLayout>
      <Container>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>Title</th>
                <th>Author</th>
                <th>Borrowed By</th>
                <th>Borrowed Date</th>
                <th>Returned Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((transaction, i) => (
                <tr key={transaction?._id} className="text-center">
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={transaction.borrowedBook?.thumbnail}
                      alt="book-img"
                      style={{ width: "30%" }}
                    />
                  </td>
                  <td>{transaction.borrowedBook?.title}</td>
                  <td>{transaction.borrowedBook?.author}</td>
                  <td>{transaction.borrowedBy}</td>
                  <td>
                    {new Date(transaction.createdAt).toLocaleDateString()}
                  </td>
                  <td
                    className={
                      transaction?.returnDate ? "text-success" : "text=danger"
                    }>
                    {transaction?.returnDate
                      ? new Date(transaction?.returnDate).toLocaleDateString()
                      : "Not Yet Returned"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>{" "}
    </DashBoardLayout>
  );
};
