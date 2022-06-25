import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {Navbar, Offcanvas, Nav, NavDropdown, Container} from "react-bootstrap";

import CartIcon from "../../Items/Cart-Icon/CartIcon";
import SearchIcon from "../../Items/Search-Icon/SearchIcon";
import {BsPersonCircle} from "react-icons/bs";

import "./Header.scss";

const Header = () => {
  const Navigate = useNavigate();
  //From Redux
  const {currentUser} = useSelector((state) => state.user);

  //Fixed When Scroll 150px
  const [fixedClass, setfixedClass] = useState("");
  const fixedNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setfixedClass("fixed-nav") : setfixedClass("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", fixedNavbar);
    return () => window.removeEventListener("scroll", fixedNavbar);
  }, []);

  //NavBar Change In Med Screen
  const expand = "md";
  return (
    <header className={`${fixedClass}`}>
      <Container>
        <Navbar key={expand} expand={expand} className="mb-1">
          <Navbar.Brand>
            <NavLink to="/">
              <h1>
                MURO<span className="logo-bold">EXE</span>
              </h1>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Muro<span>exe</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  className={({isActive}) =>
                    isActive ? "nav-element active" : "nav-element"
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({isActive}) =>
                    isActive ? "nav-element active" : "nav-element"
                  }
                  to="/shop"
                >
                  Shop
                </NavLink>
                <NavDropdown
                  title="Collections"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <div className="dropdown-element">
                    <NavLink
                      className={({isActive}) =>
                        isActive ? "nav-element active" : "nav-element"
                      }
                      to="/shop/boots"
                    >
                      Boots
                    </NavLink>
                  </div>
                  <div className="dropdown-element">
                    <NavLink
                      className={({isActive}) =>
                        isActive ? "nav-element active" : "nav-element"
                      }
                      to="/shop/sneakers"
                    >
                      Sneakers
                    </NavLink>
                  </div>
                  <div className="dropdown-element">
                    <NavLink
                      className={({isActive}) =>
                        isActive ? "nav-element active" : "nav-element"
                      }
                      to="/shop/slippers"
                    >
                      Slippers
                    </NavLink>
                  </div>
                  <div className="dropdown-element">
                    <NavLink
                      className={({isActive}) =>
                        isActive ? "nav-element active" : "nav-element"
                      }
                      to="/shop/accessories"
                    >
                      Accessories
                    </NavLink>
                  </div>
                </NavDropdown>
                {currentUser ? null : (
                  <NavLink
                    className={({isActive}) =>
                      isActive ? "nav-element active" : "nav-element"
                    }
                    to="/sign-in"
                  >
                    Sign in
                  </NavLink>
                )}
                <div className="nav-icons-box">
                  {currentUser ? (
                    <div className="nav-icon">
                      <div
                        className="profile-icon"
                        title={currentUser.displayName}
                        onClick={() => Navigate("/user")}
                      >
                        <BsPersonCircle />
                      </div>
                    </div>
                  ) : null}
                  <div className="nav-icon">
                    <SearchIcon />
                  </div>
                  <div className="nav-icon">
                    <CartIcon />
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
