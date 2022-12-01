import React from "react";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";

// Import Styles
import styles from "../../styles/Navbar.module.css";

// Import Image
import Tickitz from "../../assets/images/Tickitz.png";
import profile from "../../assets/images/profile.png";
import search from "../../assets/icon/search.png";

function BasicExample() {
  return (
    <Navbar expand="lg pt-3">
      {/* <div className="container pt-3">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand gap-5" href="#">
            <Image src={Tickitz} alt="Tickitz" />
          </a>
          <div className={` collapse navbar-collapse ${styles["list-menu"]} `}>
            <ul className={`navbar-nav ${styles["list-navbar"]}`}>
              <li className="nav-item active">
                <a className={`nav-link ${styles["nav-links"]}`} href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles["nav-links"]}`} href="#">
                  Cinemas
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles["nav-links"]}`} href="#">
                  Buy Ticket
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-5">
            <Dropdown>
              <Dropdown.Toggle className={`${styles["dropdown"]}`} variant="white">
                Location
              </Dropdown.Toggle>

              <Dropdown.Menu variant="white">
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Image src={search} alt="/" />
            <Image src={profile} alt="/" />
          </div>
        </nav>
      </div> */}

      <Container>
        <Navbar.Brand className={`${styles["company"]}`}>
          <Image src={Tickitz} alt="Tickitz" />
          <div className="dropdown"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto gap-5 ${styles["navbar"]}`}>
            <Nav.Link className={` p-0 ${styles["nav-links"]}`}>
              Movies
            </Nav.Link>
            <div
              className={`${styles["pages-shop"]} d-flex justify-content-center align-items-center`}
            >
              <p className={`mb-0 ${styles["nav-links"]} ${styles["cursor"]}`}>
                Cinemas
              </p>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center ${styles["pages-shop"]}`}
            >
              <p className={`mb-0 ${styles["nav-links"]} ${styles["cursor"]}`}>
                {" "}
                Buy Ticket
              </p>
            </div>
          </Nav>
          <div
            className={` d-flex gap-5 justify-content-center align-items-center ${styles["icon"]}`}
          >
            <Dropdown>
              <Dropdown.Toggle
                className={`${styles["dropdown"]}`}
                variant="white"
              >
                Location
              </Dropdown.Toggle>

              <Dropdown.Menu variant="white">
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Image
              className={`  ${styles["icon-1"]} ${styles["cursor"]}`}
              src={search}
              alt="/"
            />
            <Image src={profile} alt="/" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
