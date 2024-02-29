

import LogoutButton from "./features/user/LogoutButton ";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  let user = useSelector((state) => state.user.currentUser);

  return (
    <nav>
      <ul>
      <li>
          <Link to="/list">רשימת המוצרים</Link>
        </li>

        {user && user.role == "ADMIN" ? (
          <li>
            <Link to="/addProduct">הוספת מוצר</Link>
          </li>
        ) : (
          <li>
            <Link to="/basket">סל קניות</Link>
          </li>
        )}

        {!user ? (
          <>
            <li>
              <Link to="/login">כניסה</Link>
            </li>

            <li>
              <Link to="/signUp">הרשמה</Link>
            </li>
            <li>guest</li>
          </>
        ) : (
          <>
        <LogoutButton />
        <li>{user.name}</li>
         </>
        )}

       
      </ul>
    </nav>
  );
};

export default NavBar;
