
import "./navBar.css";
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
// import { BiMenuAltRight } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "./features/user/LogoutButton ";

const NavBar = () => {
  let user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (<>
 
 <header className="header">
      <div className="header__content">
        <div  className="header__content__logo">
        <> {user?  `welcome ${user.name}`:"guest"}</>

        </div>
        <nav
          className={`${
            menuOpen && size.width < 768 ? "header__content__nav isMenu" : "header__content__nav"
          }`}
        >
          <ul>
            <li>
              <Link to="/">
              <button className="btn btn__login">Home</button> 
                   </Link>
            </li>
            <li>
              <Link to="/list">
              <button className="btn btn__login">Products</button>

                </Link>
            </li>
            {user && user.role == "ADMIN" ? (
          <li>
            <Link to="/addProduct">
            <button className="btn btn__login">  add Products</button>

</Link>
          </li>
        ) : (
          <li>
            <Link to="/basket"> 
            <button className="btn btn__login">Basket</button>

               </Link>
          </li>
        )}
        
        {!user ? (
            <>
            <Link to="/signUp">
              <button className="btn">Sign up</button>
            </Link>
            <Link to="/login">
              <button className="btn btn__login">Login</button>
            </Link></>
          ):( <LogoutButton className="btn"/>)
          }
          </ul>
        </nav>
        {/* <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div> */}
      </div>
    </header>
    </>
  );
};

export default NavBar;