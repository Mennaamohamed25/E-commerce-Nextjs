import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import {
  FaUserAlt,
  FaMap,

  FaSearch,
  FaBars,
} from "react-icons/fa";
import styles from "../../styles/NavHead.module.css";
import Cart from "../Cart/Cart";

export default function () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header>
        {/* TOP NAVBAR */}
        <div className={`text-center ${styles.topNav}`}>
          <p className="mb-0 py-2"> White Friday Sales Up To 70% Off</p>
        </div>
        {/* Navbar */}
        <div className="header  py-3">
          <Container>
            <Nav className="d-flex justify-content-between align-items-center ">
              <FaBars
                className={`d-lg-none ${styles.barIcons}`}
                onClick={handleShow}
              />
              {/* NAVBAR LOGO */}
              <Navbar.Brand
                className="d-none d-lg-flex align-item-center"
                href="#home"
              >
                <div>
                  <FaMap />
                </div>
                <p className={`ms-1 mb-0 ${styles.logoText}`}> Store Locator</p>
              </Navbar.Brand>
              {/* NAVBAR SEARCH BAR */}
              <Form className=" d-none d-lg-flex w-50 position-relative">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className={`py-2 ${styles.navSearch}`}
                  aria-label="Search"
                />
                <div className={styles.searchIcon}>
                  <FaSearch />
                </div>
              </Form>
              {/* NAVBAR ICONS */}
              <Nav className={styles.navIcons}>
                <Nav.Link className="d-none d-lg-block" href="#home">
                  العربية
                </Nav.Link>
                <Nav.Link href="#features">
                  <FaUserAlt />
                </Nav.Link>
            
                <Cart />
              
              </Nav>
            </Nav>
               {/* NAVBAR SEARCH BAR */}
               <Form className={`  d-lg-none d-md-flex w-100 position-relative m-auto my-3 ${styles.searchBarSmall}`}>
             
                <Form.Control
                  type="search"
                  placeholder="بحث"
                  className={`py-2 ${styles.navSearch}`}
                  aria-label="Search"
                />
                  <div className={styles.searchIconTwo}>
                  <FaSearch />
                </div>
              
              </Form>
          </Container>
        </div>

        <div className={styles.bottomNav}>
          <Container>
            <Nav
              className={`d-none d-lg-flex  justify-content-center ${styles.navLinks}`}
            >
              <Nav.Link href="#Top">Top Deals</Nav.Link>
              <Nav.Link href="#Deals">Deals of the Day</Nav.Link>
              <Nav.Link href="#Men">Men</Nav.Link>
              <Nav.Link href="#Women">Women</Nav.Link>
              <Nav.Link href="#Kids">Kids</Nav.Link>
              <Nav.Link href="#New">New</Nav.Link>
              <Nav.Link href="#Brands">Brands</Nav.Link>
              <Nav.Link href="#Sports">Sports</Nav.Link>
              <Nav.Link href="#Accessories">Accessories</Nav.Link>
              <Nav.Link href="#Sale">Sale</Nav.Link>
            </Nav>
          </Container>
        </div>
        {/* CANVAS */}
        <Offcanvas show={show} onHide={handleClose} backdrop="static">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className={styles.canvesLogo}>
              <Navbar.Brand className="d-flex align-item-center" href="#home">
                <div className="">
                  <FaMap />
                </div>
                <span className="ms-1"> Store Locator</span>
              </Navbar.Brand>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className={`d-block ${styles.canvasLinks}`}>
              <Nav.Link href="#Top">Top Deals</Nav.Link>
              <Nav.Link href="#Deals">Deals of the Day</Nav.Link>
              <Nav.Link href="#Men">Men</Nav.Link>
              <Nav.Link href="#Women">Women</Nav.Link>
              <Nav.Link href="#Kids">Kids</Nav.Link>
              <Nav.Link href="#New">New</Nav.Link>
              <Nav.Link href="#Brands">Brands</Nav.Link>
              <Nav.Link href="#Sports">Sports</Nav.Link>
              <Nav.Link href="#Accessories">Accessories</Nav.Link>
              <Nav.Link href="#Sale">Sale</Nav.Link>
            </Nav>
            <Nav className={`mt-5 ${styles.canvasLink}`}>
              <Nav.Link href="#home">العربية</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
}
