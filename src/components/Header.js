import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    if (u) {
      setUser(u);
    }
    return;
  }, []);

  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="#home">MY LIBRARY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <div className="d-flex gap-2">
                  <h4>Welcome back {user?.fName}</h4>
                  <Link to="/" onClick={() => handleOnLogout()}>
                    {" "}
                    Logout
                  </Link>
                </div>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link href="#">Login</Nav.Link>
                <Nav.Link href="#register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
