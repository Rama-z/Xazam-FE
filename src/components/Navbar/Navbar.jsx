import React, { useEffect, useState } from "react";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useRouter } from "next/router";
import Search from "src/components/Search";

// Import Styles
import styles from "src/styles/Navbar.module.css";

import Tickitz from "../../assets/images/Tickitz-purple.png";
import search from "src/assets/Icons/search.png";
import sample from "src/assets/images/avatar.webp";
import { useDispatch, useSelector } from "react-redux";
import profileAction from "src/redux/actions/profile";
import { toast } from "react-toastify";

const Header = ({ profileAndBtn, propsOnclick, updateProfile }) => {
  const profile = useSelector((state) => state.profile);
  const [firstName, setFirstName] = useState(profile.userData?.firstName);
  const [lastName, setLastName] = useState(profile.userData?.lastName);
  const [phoneNum, setPhoneNum] = useState(profile.userData?.notelp);
  const [imageUser, setImageUser] = useState(profile?.image);
  const [clickText, setClickText] = useState(false);
  const router = useRouter();
  const role = useSelector((state) => state.auth.userData?.role);
  const roles = useSelector((state) => state.auth.userData.role);
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
  }, [dispatch, auth.userData.token, profile.profile.image]);

  return (
    <Navbar expand="lg py-3">
      <Container>
        <Navbar.Brand className={`${styles["company"]}`}>
          <Image
            src={Tickitz}
            alt="Tickitz"
            objectFit="cover"
            className={styles["company__image"]}
            onClick={() => {
              router.push("/home");
            }}
          />
          <div className="dropdown"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto gap-5 ${styles["navbar"]}`}>
            <Nav.Link
              className={` p-0 ${styles["nav-links"]}`}
              onClick={() => {
                router.push("/movies");
              }}
            >
              Movies
            </Nav.Link>
            <div
              className={`${styles["pages-shop"]} d-flex justify-content-center align-items-center`}
            >
              <p
                className={`mb-0 ${styles["nav-links"]} ${styles["cursor"]}`}
                onClick={() => {
                  router.push("/cinema");
                }}
              >
                Cinemas
              </p>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center ${styles["pages-shop"]}`}
            >
              {roles === "user" || role === null ? (
                <p
                  className={`mb-0 ${styles["nav-links"]} ${styles["cursor"]}`}
                  onClick={() => {
                    if (!auth.userData.token) {
                      toast.info("You have to login first");
                      router.push("/auth/login");
                    }
                    router.push("/movies");
                  }}
                >
                  Buy Ticket
                </p>
              ) : (
                <p
                  className={`mb-0 ${styles["nav-links"]} ${styles["cursor"]}`}
                  onClick={() => {
                    if (!auth.userData.token) {
                      toast.info("You have to login first");
                      router.push("/auth/login");
                    }
                    router.push("/movies");
                  }}
                  style={{ display: "none" }}
                >
                  Buy Ticket
                </p>
              )}
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
              onClick={() => {
                setClickText(!clickText);
              }}
              className={`${styles["icon-1"]} ${styles["cursor"]}`}
              src={search}
              alt="/"
            />
            {role === "admin" ? (
              <>
                <span
                  className={styles["profile"]}
                  onClick={() => {
                    router.push("/profile");
                  }}
                >
                  <p>Profile</p>
                </span>
                <button
                  onClick={() => {
                    router.push("/admin");
                  }}
                  className={styles["admin-btn"]}
                >
                  Admin
                </button>
              </>
            ) : auth.userData.user_id ? (
              <div className={styles["image-profile"]}>
                <Image
                  src={imageUser ? imageUser : sample}
                  layout="fill"
                  objectFit="cover"
                  style={{ cursor: "pointer" }}
                  alt="profile"
                  onClick={() => {
                    router.push("/profile");
                  }}
                />
              </div>
            ) : (
              profileAndBtn
            )}
          </div>
        </Navbar.Collapse>
        <Search showInputText={clickText} />
      </Container>
    </Navbar>
  );
};

export default Header;
