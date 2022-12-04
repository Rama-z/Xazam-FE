import React, { useEffect, useState } from "react";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useRouter } from "next/router";

// Import Styles
import styles from "src/styles/Navbar.module.css";

// Import Image
import Tickitz from "../../assets/images/Tickitz-purple.png";
import search from "src/assets/icons/search.png";
import sample from "src/assets/images/avatar.webp";
import { useDispatch, useSelector } from "react-redux";
import profileAction from "src/redux/actions/profile";

const Header = ({ profileAndBtn, propsOnclick, updateProfile }) => {
  const profile = useSelector((state) => state.profile);
  const [firstName, setFirstName] = useState(profile.userData.firstName);
  const [lastName, setLastName] = useState(profile.userData.lastName);
  const [phoneNum, setPhoneNum] = useState(profile.userData.notelp);
  const [imageUser, setImageUser] = useState(profile.image);
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      profileAction.getProfileThunk(
        auth.userData.token,
        setFirstName,
        setPhoneNum,
        setLastName,
        setImageUser
      )
    );
  }, [dispatch, auth.userData.token]);

  return (
    <Navbar expand="lg py-3">
      <Container>
        <Navbar.Brand className={`${styles["company"]}`}>
          <Image
            src={Tickitz}
            alt="Tickitz"
            className={styles["company__image"]}
          />
          <div className="dropdown"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto gap-5 ${styles["navbar"]}`}>
            <Nav.Link
              className={` p-0 ${styles["nav-links"]}`}
              onClick={() => {
                router.push("/home");
              }}
            >
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
              onClick={propsOnclick}
              className={`  ${styles["icon-1"]} ${styles["cursor"]}`}
              src={search}
              alt="/"
            />
            {/* TO DO: Using props to reusable components */}
            <span className={styles["image-profile"]}>
              {auth.userData.user_id ? (
                <Image
                  src={imageUser ? imageUser : sample}
                  layout="fill"
                  style={{ cursor: "pointer" }}
                  objectFit="cover"
                  alt="profile"
                  onClick={() => {
                    router.push("/profile");
                  }}
                />
              ) : (
                profileAndBtn
              )}
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
